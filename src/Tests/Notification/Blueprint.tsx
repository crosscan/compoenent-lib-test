import React from 'react';
import {Button, Card, H6, Position, Toaster} from "@blueprintjs/core";

export class NotificationExample extends React.PureComponent {
    private toaster: Toaster | null = null;
    private refHandlers = {
        toaster: (ref: Toaster) => this.toaster = ref,
    };

    public render() {
        return (
            <Card>
                <H6>Notification Example</H6>
                <Button onClick={this.addToast} text="Create Notification"/>
                <Toaster position={Position.BOTTOM_RIGHT} ref={this.refHandlers.toaster}>
                </Toaster>
            </Card>
        )
    }

    private addToast = () => {
        this.toaster?.show({message: "Example Notification!"});
    }
}