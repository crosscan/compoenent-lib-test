import React, {FC, useState} from 'react';
import {Alert, Button, Card, Form, FormControl, Stack, Table, Toast} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const DateTimePickerExample: FC = () => {
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

interface DataType {
    time: string,
    customers: number,
    visitors: number
}

const DataDisplayExample = () => {
    const data: DataType[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
        time: (value + 8) + ":00",
        visitors: Math.floor(Math.random() * 100),
        customers: Math.floor(Math.random() * 10)
    }));


    return <Card>
        <h6>Data Display Example</h6>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Time</th>
                <th>Visitors</th>
                <th>Customers</th>
            </tr>
            </thead>
            <tbody>
            {data.map(datum => <tr><td>{datum.time}</td><td>{datum.visitors}</td><td>{datum.customers}</td></tr>)}
            </tbody>
        </Table>
    </Card>
}

const FormExample: FC = () => {
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


const NotificationExample : FC = () => {
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

const StoreStructureExample: FC = () => {
    return (<Card>
        <Card.Title> Store Structure Example</Card.Title>
        <Card.Body>
            <Alert>keine Komponente zur Darstellung von hierarchischen Strukturen vorhanden.</Alert>
        </Card.Body>
    </Card>);
}

const ReactBootstrapTest = () => {

    return (<Stack>
        <h2>React Bootstrap</h2>
        <DataDisplayExample/>
        <DateTimePickerExample/>
        <FormExample/>
        <NotificationExample/>
        <StoreStructureExample/>
    </Stack>);
}

export default ReactBootstrapTest;