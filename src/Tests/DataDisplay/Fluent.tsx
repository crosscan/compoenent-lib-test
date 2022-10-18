import React from 'react';
import {MessageBar, MessageBarType, Text,} from "@fluentui/react";

export const DataDisplayExample = () => {
    return <div>
        <Text variant={'large'}>Data Display Example</Text>
        <MessageBar messageBarType={MessageBarType.info}>Keine Tabellenkomponente vorhanden.</MessageBar>
    </div>
}
