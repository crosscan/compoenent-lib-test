import React, {FC} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {Card, Typography, TextField, CardContent} from "@mui/material";
import {DateTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';


export const DateTimePickerExample: FC = () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));

    return (
        <Card>
            <CardContent>
                <Typography variant={"h6"}>Date Time Picker Example</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="DateTimePicker"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </LocalizationProvider>
            </CardContent>
        </Card>
    );
};