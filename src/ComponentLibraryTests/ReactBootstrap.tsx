import React from 'react';
import {Stack} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DateTimePickerExample} from "../Tests/DateTimePicker/ReactBootstrap";
import {DataDisplayExample} from "../Tests/DataDisplay/ReactBootstrap";
import {FormExample} from "../Tests/Form/ReactBootstrap";
import {NotificationExample} from "../Tests/Notification/ReactBootstrap";
import {StoreStructureExample} from "../Tests/StoreStructure/ReactBootstrap";

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