import React, {FC} from 'react';
import {Button, Card, Dialog, H6} from "@blueprintjs/core";
import {DateRangePicker} from "@blueprintjs/datetime";

export const DateTimePickerExample : FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleButtonClick = React.useCallback(() => setIsOpen(!isOpen), [isOpen]);
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