import React, {FC} from 'react';
import {DateTimePickerExample} from "../Tests/DateTimePicker/Mui";
import {DataDisplayExample} from "../Tests/DataDisplay/Mui";
import {FormExample} from "../Tests/Form/Mui";
import {NotificationExample} from "../Tests/Notification/Mui";
import {StoreStructureExample} from "../Tests/StoreStructure/Mui";
import {createTheme, Stack, Theme, ThemeProvider, Typography} from "@mui/material";
import {TestProps, ThemeColor} from "../App";

// const lilaTheme = createTheme({
//     palette: {
//         primary: {main: ThemeColor.CROSSCAN_LILA}
//     }
// })
// const blueTheme = createTheme({
//     palette: {
//         primary: {main: ThemeColor.CROSSCAN_BLUE}
//     }
// })
// const darkGreyTheme = createTheme({
//     palette: {
//         primary: {main: ThemeColor.CROSSCAN_DARK_GREY}
//     }
// })
// const lightGreyTheme = createTheme({
//     palette: {
//         primary: {main: ThemeColor.CROSSCAN_LIGHT_GREY}
//     }
// })
//
// const defaultTheme = createTheme();

// const getThemeForColor = (color: ThemeColor | undefined): Theme => {
//     switch (color) {
//         case ThemeColor.CROSSCAN_LILA:
//             return lilaTheme;
//         case ThemeColor.CROSSCAN_BLUE:
//             return blueTheme;
//         case ThemeColor.CROSSCAN_LIGHT_GREY:
//             return lightGreyTheme;
//         case ThemeColor.CROSSCAN_DARK_GREY:
//             return darkGreyTheme;
//     }
//     return defaultTheme;
//
// }

const MaterialUiTest: FC<TestProps> = ({themeColor}) => {


    return (
        <Stack gap={2} marginX={2}>
            <Typography variant={"h2"}>Material UI</Typography>
            <DataDisplayExample/>
            <DateTimePickerExample/>
            <FormExample/>
            <NotificationExample/>
            <StoreStructureExample/>
        </Stack>
    );
}

export default MaterialUiTest;