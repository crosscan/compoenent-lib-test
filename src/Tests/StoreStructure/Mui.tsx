import React, {FC, useState} from 'react';
import {Card, CardContent, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ExpandLess, ExpandMore, Sensors, Store} from "@mui/icons-material";

const ListLeaf: FC<{ label: string }> = ({label}: { label: string }) => {
    return <ListItemButton>
        <ListItemIcon>
            <Sensors/>
        </ListItemIcon>
        <ListItemText primary={label}/>
    </ListItemButton>
}

interface NodeData {
    key: number
    label: string,
    children?: NodeData[]
}

const ListNode: FC<{ node:NodeData } > = ({node}: { node: NodeData }) => {
    const [open, setOpen] = useState(false);

    return <>
        <ListItemButton onClick={()=>setOpen(!open)}>
            <ListItemIcon>
                <Store/>
            </ListItemIcon>
            <ListItemText primary={node.label}/>
            {node.children?.length !== undefined&& node.children.length >0 &&(open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component={"div"} disablePadding>
                {node.children?.map(getNode)}
            </List>
        </Collapse>
    </>

}

const getNode = (node: NodeData): JSX.Element => {
    return node.children ? <ListNode node={node}/>: <ListLeaf label={node.label}/>;
}

export const StoreStructureExample: FC = () => {
    const sampleData: NodeData[] = [
        {
            key: 0,
            label: "Store 1",
            children: [
                {key: 3, label: "Sensor 1"},
                {key: 4, label: "Sensor 2"},
                {key: 5, label: "Sensor 3"},
                {key: 6, label: "Sensor 4"},
            ]
        },
        {
            key: 1,
            label: "Store 2",
            children: []
        },
        {
            key: 2,
            label: "Store 3",
            children: [
                {key: 3, label: "Sensor 1"},
                {key: 4, label: "Sensor 2"},
                {key: 5, label: "Sensor 3"},
                {key: 6, label: "Sensor 4"},
            ]
        },
    ];

    return (<Card>
        <Typography variant={"h6"}> Store Structure Example</Typography>
        <CardContent>
            <List>
                {sampleData.map(getNode)}
            </List>
        </CardContent>
    </Card>);
}
