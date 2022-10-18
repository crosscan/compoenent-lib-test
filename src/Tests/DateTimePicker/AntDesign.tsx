import React, {FC} from 'react';
import 'antd/dist/antd.variable.css';
import {
    Card,
    DatePicker,
    Typography
} from "antd";

const {RangePicker} = DatePicker;


export const DateTimePickerExample: FC = () => {
    return (
        <Card>
            <Typography.Title level={5}>Date Time Picker Example</Typography.Title>
            <RangePicker showTime/>
        </Card>
    );
};