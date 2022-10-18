import React, {FC, useState} from 'react';
import {Button, Card, Toast} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NotificationExample: FC = () => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <Card>
            <Card.Title>Notification Example</Card.Title>
            <Card.Body>
                <Button onClick={toggleShowA} className="mb-2">
                    Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Example Notification!</Toast.Body>
                </Toast>
            </Card.Body>
        </Card>
    );
}
