import React from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Card, CardContent, Typography} from "@mui/material";


interface DataType {
    time: string,
    customers: number,
    visitors: number
}

export const DataDisplayExample = () => {
    const columns: GridColDef[] = [
        {
            headerName: "Time",
            field: 'time',
        },
        {
            headerName: "Visitors",
            field: 'visitors',
        },
        {
            headerName: "Customers",
            field: 'customers',
        },
    ]
    const data: DataType[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
        id: value,
        time: (value + 8) + ":00",
        visitors: Math.floor(Math.random() * 100),
        customers: Math.floor(Math.random() * 10)
    }));


    return <Card>
        <CardContent>
            <Typography variant={"h6"}>Data Display Example</Typography>
            <div style={{height: 397}}>
                <DataGrid rows={data} columns={columns} rowHeight={34} hideFooter/>
            </div>
        </CardContent>
    </Card>
}
