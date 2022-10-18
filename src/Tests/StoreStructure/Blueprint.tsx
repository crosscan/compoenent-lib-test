import React, {FC, useState} from 'react';
import {Card, H6, Tree, TreeNodeInfo} from "@blueprintjs/core";

export const StoreStructureExample: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sampleData: TreeNodeInfo[] = [
        {
            id: 0,
            hasCaret: true,
            icon: isOpen ? "folder-open" : "folder-close",
            label: "store 1",
            isExpanded: isOpen,
            childNodes: [
                {id: 0, label: "Sensor 1"},
                {id: 2, label: "Sensor 2"},
                {id: 4, label: "Sensor 3"},
                {id: 5, label: "Sensor 4"},
            ]
        },
        {
            id: 1,
            hasCaret: true,
            icon: "folder-close",
            label: "store 2"
        },
        {
            id: 2,
            hasCaret: true,
            icon: "folder-close",
            label: "store 3"
        },
    ];
    return (<Card>
        <H6> Store Structure Example</H6>
        <Tree contents={sampleData} onNodeClick={() => setIsOpen(!isOpen)}/>
    </Card>);
}
