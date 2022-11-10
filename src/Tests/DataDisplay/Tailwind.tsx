import React, {useMemo} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import Card from "../../TailwindComponents/Card";
import {Column, useTable} from "react-table";

interface DataType {
    id: number,
    time: string,
    customers: number,
    visitors: number
}

const Table = () => {
    const columns: Column<DataType>[] = useMemo(() => [
        {
            Header: "Time",
            accessor: 'time',
        },
        {
            Header: "Visitors",
            accessor: 'visitors',
        },
        {
            Header: "Customers",
            accessor: 'customers',
        },
    ], []);
    const data: DataType[] = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
        id: value,
        time: (value + 8) + ":00",
        visitors: Math.floor(Math.random() * 100),
        customers: Math.floor(Math.random() * 10)
    })), []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});
    return (
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mb-1.5">
                            <table className="min-w-full divide-y divide-gray-300" {...getTableProps()}>
                                <thead className="bg-gray-50">
                                {
                                    headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {
                                                headerGroup.headers.map(column => (
                                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" {...column.getHeaderProps()}>
                                                        {
                                                            column.render('Header')}
                                                    </th>
                                                ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white" {...getTableBodyProps()}>
                                {
                                    rows.map(row => {
                                        prepareRow(row)
                                        return (
                                            <tr{...row.getRowProps()}>
                                                {
                                                    row.cells.map(cell => {
                                                        return (
                                                            <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500"  {...cell.getCellProps()}>
                                                                {
                                                                    cell.render('Cell')}
                                                            </td>
                                                        )
                                                    })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    )
}

export const DataDisplayExample = () => {


    return <Card title="Data Display Example">
        <Table/>
    </Card>
}
