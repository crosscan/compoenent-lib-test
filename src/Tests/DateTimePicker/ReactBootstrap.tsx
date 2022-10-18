import React, {FC} from 'react';
import {Card, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const DateTimePickerExample: FC = () => {
    return (
        <Card>
            <Card.Title>Date Time Picker Example</Card.Title>
            <Card.Body>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type={"date"}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type={"time"}/>
                </Form.Group>
            </Card.Body>
        </Card>
    );
};