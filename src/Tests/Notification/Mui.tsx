import React, {FC} from 'react';
import {Button, Card, CardContent, Snackbar, Typography} from "@mui/material";

export const NotificationExample: FC = () => {
    const [open, setOpen] = React.useState(false);

    return <Card variant={"outlined"}>
        <CardContent>
            <Typography variant={"h6"}>Notification Example</Typography>
            <Button variant={"contained"} onClick={() => setOpen(true)}>Create Notification</Button>
            <Snackbar open={open} onClose={() => setOpen(false)} message={"Example Notification"}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} autoHideDuration={5000}/>
        </CardContent>
    </Card>
}