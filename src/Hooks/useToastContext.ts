import {useContext} from "react";
import NotificationContext from "../TailwindComponents/NotificationProvider";

export default function useNotificationContext() {
    return useContext(NotificationContext);
}