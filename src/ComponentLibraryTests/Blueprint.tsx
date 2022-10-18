import React from 'react';
import {H2} from "@blueprintjs/core";
import {DateTimePickerExample} from "../Tests/DateTimePicker/Blueprint";
import {DataDisplayExample} from "../Tests/DataDisplay/Blueprint";
import {FormExample} from "../Tests/Form/Blueprint";
import {NotificationExample} from "../Tests/Notification/Blueprint";
import {StoreStructureExample} from "../Tests/StoreStructure/Blueprint";

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