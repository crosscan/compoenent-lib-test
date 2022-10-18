import React, {FC, Key, useState} from 'react';
import 'antd/dist/antd.variable.css';
import {Card, Cascader,Tree, Typography} from "antd";
import type {DataNode} from 'antd/es/tree';

export const StoreStructureExample: FC = () => {
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
