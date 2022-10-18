import React, {FC, Key, useState} from 'react';
import 'antd/dist/antd.variable.css';
import {
    BreadcrumbProps, Button,
    Card,
    Cascader,
    ConfigProvider,
    DatePicker,
    Form,
    Input, message, notification,
    PageHeader,
    Space, Statistic, Table, Timeline, Tree,
    Typography, Upload
} from "antd";
import type {DataNode} from 'antd/es/tree';
import deDe from 'antd/es/locale/de_DE';
import {ColumnsType} from "antd/es/table";
import {TestProps} from "../App";

const {RangePicker} = DatePicker;


const DateTimePickerExample: FC = () => {
    return (
        <Card>
            <Typography.Title level={5}>Date Time Picker Example</Typography.Title>
            <RangePicker showTime/>
        </Card>
    );
};

interface DataType {
    time: string,
    customers: number,
    visitors: number
}

const DataDisplayExample = () => {
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

const FormExample: FC = () => {
    return <Card>
        <Typography.Title level={5}>Form Example</Typography.Title>
        <Form>
            <Form.Item label={"Store Title"}>
                <Input/>
            </Form.Item>
            <Form.Item label={"Store Plan"}>
                <Upload.Dragger>
                    <Typography>Click or drag file to this area to Upload</Typography>
                </Upload.Dragger>
            </Form.Item>
        </Form>
    </Card>
}


const NotificationExample: FC = () => {
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

const StoreStructureExample: FC = () => {
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
    const [checkedKeys, setCheckedKeys] = useState<Key[] | { checked: Key[]; halfChecked: Key[]; }>([]);
    const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
    const sampleData = [
        {
            value: 0,
            label: "Store 1",
            children: [
                {value: 3, label: "Sensor 1"},
                {value: 4, label: "Sensor 2"},
                {value: 5, label: "Sensor 3"},
                {value: 6, label: "Sensor 4"},
            ]
        },
        {
            value: 1,
            label: "Store 2"
        },
        {
            value: 2,
            label: "Store 3"
        },
    ];
    const treeData: DataNode[] = [
        {
            key: 0,
            title: "Store 1",
            children: [
                {key: 3, title: "Sensor 1"},
                {key: 4, title: "Sensor 2"},
                {key: 5, title: "Sensor 3"},
                {key: 6, title: "Sensor 4"},
            ]
        },
        {
            key: 1,
            title: "Store 2"
        },
        {
            key: 2,
            title: "Store 3"
        },
    ];
    const onExpand = (expandedKeysValue: React.Key[]) => {
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeysValue: Key[] | { checked: Key[]; halfChecked: Key[]; }) => {
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue: Key[] | { checked: Key[]; halfChecked: Key[]; }, info: any) => {
        setSelectedKeys(Array.isArray(selectedKeysValue) ? selectedKeysValue : selectedKeysValue.checked);
    };
    return (<Card>
        <Typography.Title level={5}> Store Structure Example</Typography.Title>
        <Cascader options={sampleData} placeholder={"select element"} changeOnSelect multiple/>
        <Card>
            <Tree checkable onExpand={onExpand} expandedKeys={expandedKeys} autoExpandParent={autoExpandParent}
                  onCheck={onCheck} checkedKeys={checkedKeys} onSelect={onSelect} selectedKeys={selectedKeys}
                  treeData={treeData} showLine/>
        </Card>
    </Card>);
}



const AntDesignTest: FC<TestProps> = ({themeColor}: TestProps) => {
    if(themeColor !== undefined) {
        ConfigProvider.config({theme: {primaryColor: themeColor}})
    }
    const routes: BreadcrumbProps = {
        routes: [{path: 'index', breadcrumbName: 'Component Library Test'}, {
            path: 'first',
            breadcrumbName: 'Ant Design'
        }]
    };
    return (<ConfigProvider locale={deDe}>
        <Space direction={"vertical"} style={{display: "flex", marginLeft: "1em", marginRight: "1em"}}>
            <PageHeader title={"Ant Design"} breadcrumb={routes}
                        avatar={{src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}}>
            </PageHeader>
            <DataDisplayExample/>
            <DateTimePickerExample/>
            <FormExample/>
            <NotificationExample/>
            <StoreStructureExample/>
        </Space>
    </ConfigProvider>);
}

export default AntDesignTest;