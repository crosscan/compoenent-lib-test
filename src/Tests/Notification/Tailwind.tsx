import React from "react";
import Card from "../../TailwindComponents/Card";
import Button from "../../TailwindComponents/Button";
import useNotificationContext from "../../Hooks/useToastContext";


const NotificationExample = () => {
    const addNotification = useNotificationContext();
    return <Card title="Notification Example">
        <Button title="Create Notification" onClick={()=>addNotification({message:"This ist an example notification", title:"Example Notification"})}/>
    </Card>
}

export default NotificationExample;