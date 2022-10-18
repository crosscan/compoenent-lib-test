import React from 'react';
import 'antd/dist/antd.variable.css';
import {Card, Space, Statistic, Table, Timeline, Typography} from "antd";
import {ColumnsType} from "antd/es/table";


interface DataType {
    time: string,
    customers: number,
    visitors: number
}

export const DataDisplayExample = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: "Time",
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: "Visitors",
            dataIndex: 'visitors',
            key: 'visitors'
        },
        {
            title: "Customers",
            dataIndex: 'customers',
            key: 'customers'
        },
    ]
    const data: DataType[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
        time: (value + 8) + ":00",
        visitors: Math.floor(Math.random() * 100),
        customers: Math.floor(Math.random() * 10)
    }));


    return <Card>
        <Typography.Title level={5}>Data Display Example</Typography.Title>
        <Space direction={"vertical"} style={{display: "flex"}}>
            <Statistic title={"Fill Level"} value={20} suffix={"/ 30"}/>
            <Table columns={columns} dataSource={data} bordered size={"small"}/>
            <Timeline mode={'left'}>
                <Timeline.Item label={"1.2.2022 12:34"}>Store Created</Timeline.Item>
                <Timeline.Item label={"5.2.2022 15:12"}>Sensor 000B91012708 added to Store</Timeline.Item>
                <Timeline.Item label={"5.2.2022 15:15"}>Sensor 000B91012709 added to Store</Timeline.Item>
            </Timeline>
        </Space>
    </Card>
}
