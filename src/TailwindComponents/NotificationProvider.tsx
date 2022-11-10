import React, {createContext, ReactNode, useCallback, useEffect, useState} from "react";
import {Notification, NotificationProps} from "./Notification";

const NotificationContext = createContext((notification: NotificationProps) => console.log("no context function defined"));

export default NotificationContext;

interface NotificationContextProviderProps {
    children?: ReactNode
}

export const NotificationContextProvider = ({children}: NotificationContextProviderProps) => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);

    useEffect(() => {
        if (notifications.length > 0) {
            const timer = setTimeout(
                () => setNotifications(notifications => notifications.slice(1)), 3000
            );
            return () => clearTimeout(timer);
        }
    }, [notifications]);

    const addNotification = useCallback(
        (notification: NotificationProps) => setNotifications(notifications => [...notifications, notification]), [setNotifications]
    )

    return <NotificationContext.Provider value={addNotification}>
        {children}
        {/* Global notification live region, render this permanently at the end of the document */}
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {notifications.map(notification => (<Notification {...notification}/>))}
            </div>
        </div>
    </NotificationContext.Provider>
}