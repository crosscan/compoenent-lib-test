import React from 'react';
import {Card, H6} from "@blueprintjs/core";
import {Cell, Column, Table2} from "@blueprintjs/table";

export const DataDisplayExample = () => {
    const timeRenderer = (rowIndex: number) => (
        <Cell>{rowIndex+8}:00</Cell>
    );
    const visitorsRenderer = (rowIndex: number) => (
        <Cell>{Math.floor(Math.random()*100)}</Cell>
    );

    return <Card>
        <H6>Data Display Example</H6>
        <Table2 numRows={10}>
            <Column name="Time" cellRenderer={timeRenderer}/>
            <Column name="Visitors" cellRenderer={visitorsRenderer}/>
        </Table2>
    </Card>
}