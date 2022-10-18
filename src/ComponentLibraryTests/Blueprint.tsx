import React, {FC, useState} from 'react';
import {
    Button, Card, Dialog,
    FileInput,
    FormGroup,
    H2,
    H6,
    InputGroup, Position,
    Toaster,
    Tree,
    TreeNodeInfo
} from "@blueprintjs/core";
import {DateRangePicker} from "@blueprintjs/datetime";
import {Cell, Column, Table2} from "@blueprintjs/table";

const DateTimePickerExample : FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleButtonClick = React.useCallback(() => setIsOpen(!isOpen), []);
    const handleClose = React.useCallback(() => setIsOpen(false), []);
    return (
        <Card>
            <H6>Date Time Picker Example</H6>
            <Button text={"Open Datetime Range Picker"} onClick={handleButtonClick}/>
            <Dialog isOpen={isOpen} onClose={handleClose}>
                <DateRangePicker timePrecision={"minute"} allowSingleDayRange/>
            </Dialog>
        </Card>
    );
};

const DataDisplayExample = () => {
    const timeRenderer = (rowIndex: number) => (
        <Cell>{rowIndex+8}:00</Cell>
    );
    const visitorsRenderer = (rowIndex: number) => (
        <Cell>{Math.floor(Math.random()*100)}</Cell>
    );

    return <Card>
        <H6>Data Display Example</H6>
        <Table2 numRows={10}>
            <Column name="Time" cellRenderer={timeRenderer}/>
            <Column name="Visitors" cellRenderer={visitorsRenderer}/>
        </Table2>
    </Card>
}

const FormExample: FC = () => {
    return <Card>
        <H6>Form Example</H6>
        <FormGroup label={"Store Data"}>
            <InputGroup placeholder={"Store Title"}/>
            <FileInput text={'Store Plan'}/>
        </FormGroup>
    </Card>
}


class NotificationExample extends React.PureComponent {
    private toaster: Toaster|null = null;
    private refHandlers = {
        toaster: (ref: Toaster) => this.toaster = ref,
    };

    public render() {
        return (
            <Card>
                <H6>Notification Example</H6>
                <Button onClick={this.addToast} text="Create Notification" />
                <Toaster position={Position.BOTTOM_RIGHT} ref={this.refHandlers.toaster}>
                </Toaster>
            </Card>
        )
    }

    private addToast = () => {
        this.toaster?.show({ message: "Example Notification!" });
    }
}

const StoreStructureExample: FC = () => {
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

const BlueprintTest = () => {

    return (<>
        <H2>Blueprint.js</H2>
        <DataDisplayExample/>
        <DateTimePickerExample/>
        <FormExample/>
        <NotificationExample/>
        <StoreStructureExample/>
    </>);
}

export default BlueprintTest;