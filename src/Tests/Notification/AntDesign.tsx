import React, {FC} from 'react';
import 'antd/dist/antd.variable.css';
import {Button, Card, message, notification, Space, Typography} from "antd";

export const NotificationExample: FC = () => {
    return <Card>
        <Typography.Title level={5}>Notification Example</Typography.Title>
        <Space>
            <Button onClick={() => message.info('Example Notification!')}>Create Simple Message</Button>
            <Button onClick={() => notification.info({
                message: 'Example Notification!',
                description: 'This is a longer notification',
                onClick: () => message.info('Notification clicked'),
                placement: 'bottomRight'
            })}>Create Complex Notification</Button>
        </Space>
    </Card>
}