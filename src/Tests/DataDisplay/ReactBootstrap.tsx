import React from 'react';
import {Card, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface DataType {
    time: string,
    customers: number,
    visitors: number
}

export const DataDisplayExample = () => {
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