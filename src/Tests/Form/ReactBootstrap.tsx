import React, {FC} from 'react';
import {Card, Form, FormControl} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const FormExample: FC = () => {
    return <Card>
        <Card.Title>Form Example</Card.Title>
        <Card.Body>
            <Form.Group>
                <Form.Label>Store Title</Form.Label>
                <Form.Control type={"text"}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Store Plan</Form.Label>
                <Form.Control type={'file'}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Mail Address</Form.Label>
                <FormControl type={"email"}/>
            </Form.Group>
        </Card.Body>
    </Card>
}
