import React, {FC} from 'react';
import {Card, FileInput, FormGroup, H6, InputGroup,} from "@blueprintjs/core";

export const FormExample: FC = () => {
    return <Card>
        <H6>Form Example</H6>
        <FormGroup label={"Store Data"}>
            <InputGroup placeholder={"Store Title"}/>
            <FileInput text={'Store Plan'}/>
        </FormGroup>
    </Card>
}