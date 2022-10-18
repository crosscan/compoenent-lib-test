import React from 'react';
import {initializeIcons, PartialTheme, Stack, Text, ThemeProvider} from "@fluentui/react";
import {TestProps} from "../App";
import {DateTimePickerExample} from "../Tests/DateTimePicker/Fluent";
import {DataDisplayExample} from "../Tests/DataDisplay/Fluent";
import {FormExample} from "../Tests/Form/Fluent";
import {NotificationExample} from "../Tests/Notification/Fluent";
import {StoreStructureExample} from "../Tests/StoreStructure/Fluent";

const FluentTest = ({themeColor}: TestProps) => {
    initializeIcons();
    let theme: PartialTheme = {};
    if (themeColor !== undefined) {
        theme.palette = {...theme.palette, themePrimary: themeColor}
    }

    return <ThemeProvider theme={theme}>
        <Stack gap={10}>
            <Text variant={'superLarge'}>Microsoft Fluent</Text>
            <DataDisplayExample/>
            <DateTimePickerExample/>
            <FormExample/>
            <NotificationExample/>
            <StoreStructureExample/>
        </Stack>
    </ThemeProvider>;
}

export default FluentTest;