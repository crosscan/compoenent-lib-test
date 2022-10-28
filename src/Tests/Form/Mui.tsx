import React, {FC} from 'react';
import {Button, Card, CardContent, Stack, TextField, Typography} from "@mui/material";

export const FormExample: FC = () => {
    return <Card variant={"outlined"}>
        <CardContent>
            <Stack gap={2}>
                <Typography variant={"h6"}>Form Example</Typography>
                <TextField label={"Store Title"}/>
                <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden/>
                </Button>
            </Stack>
        </CardContent>
    </Card>
}