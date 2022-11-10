import React, {FC, PropsWithChildren, ReactNode, useState} from 'react';
import {BuildingStorefrontIcon, ChevronDownIcon, ChevronUpIcon, SignalIcon} from "@heroicons/react/24/outline";
import Card from "../../TailwindComponents/Card";

const ListLeaf: FC<{ label: string }> = ({label}: { label: string }) => {
    return <li key={label} className="hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                    <SignalIcon className="h-6"/>
                        {label}
                </div>
            </div>
    </li>
}

interface NodeData {
    key: number
    label: string,
    children?: NodeData[]
}

const ListNode: FC<{ node: NodeData }> = ({node}: { node: NodeData }) => {
    const [open, setOpen] = useState(false);

    return <>
        <li key={node.key}>
            <button onClick={()=>setOpen(!open)} className="block hover:bg-gray-50 w-full">
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="flex">
                        <BuildingStorefrontIcon className="h-6"/>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            {node.label}
                        </div>
                    </div>
                    <div className="flex-grow"/>
                    <div className={"justify-self-end pr-2"}>
                        {node.children?.length !== undefined && node.children.length > 0 && (open ? <ChevronUpIcon className="h-6"/> : <ChevronDownIcon className="h-6"/>)}
                    </div>
                </div>
            </button>
        </li>
        {node.children?.length !== undefined && node.children.length > 0 && open &&
            <List>
                {node.children?.map(getNode)}
            </List>}
    </>

}

const getNode = (node: NodeData): JSX.Element => {
    return node.children ? <ListNode node={node}/> : <ListLeaf label={node.label}/>;
}

interface ListProps {
    children?: ReactNode
}

const List = ({children}: ListProps) => <div className="overflow-hidden bg-white  border-y-0">
    <ul role="list" className="divide-y divide-gray-200 border-l-2 border-dashed my-2">
        {children}
    </ul>
</div>

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

    return (<Card title="Store Structure Example">
            <List>
                {sampleData.map(getNode)}
            </List>
    </Card>);
}
