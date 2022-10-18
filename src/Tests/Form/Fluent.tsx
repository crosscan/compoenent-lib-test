import React, {FC} from 'react';
import {Text, TextField} from "@fluentui/react";

export const FormExample: FC = () => {
    return <div>
        <Text variant={'large'}>Form Example</Text>
        <TextField label={"Store Title"}/>
    </div>
}
