import React, {FC} from 'react';
import {DatePicker, DayOfWeek, Text} from "@fluentui/react";

export const DateTimePickerExample: FC = () => {
    return (
        <div>
            <Text variant={'large'}>Date Picker Example</Text>
            <DatePicker firstDayOfWeek={DayOfWeek.Monday} placeholder={"Select date"} ariaLabel={"Select a date"}/>
        </div>
    );
};
