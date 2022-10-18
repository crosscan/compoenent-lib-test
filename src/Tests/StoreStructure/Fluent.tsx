import React, {FC, useMemo} from 'react';
import {
    DetailsRow,
    GroupedList,
    IColumn,
    IGroup,
    IObjectWithKey,
    Selection,
    SelectionMode,
    SelectionZone,
    Text
} from "@fluentui/react";

interface ItemType extends IObjectWithKey {
    id: number,
    name: string
}

export const StoreStructureExample: FC = () => {
    const groups: IGroup[] = useMemo(() => [
        {
            key: '123', name: 'Dortmund', count: 5, startIndex: 0,
            children: [
                {
                    key: '0',
                    name: "store 1",
                    count: 3, startIndex: 0
                },
                {
                    key: '1',
                    name: "store 2", count: 1, startIndex: 3
                },
                {
                    key: '2',
                    name: "store 3", count: 1, startIndex: 4
                },
            ]
        }
    ], []);
    const items: ItemType[] = useMemo(() => [
        {id: 0, key: '3', name: "Sensor 1"},
        {id: 1, key: '4', name: "Sensor 2"},
        {id: 2, key: '5', name: "Sensor 3"},
        {id: 3, key: '6', name: "Sensor 4"},
        {id: 4, key: '7', name: "Sensor 5"},
    ], []);
    const columns: IColumn[] = useMemo(() => [{key: 'id', name: 'ID', minWidth: 200, fieldName: 'id'}, {
        key: 'name',
        name: 'name',
        minWidth: 200,
        fieldName: 'name'
    }], []);
    const selection = useMemo(() => {
        const selection = new Selection();
        selection.setItems(items);
        return selection;
    }, [items])

    const onRenderCell = React.useCallback(
        (nestingDepth?: number, item?: ItemType, itemIndex?: number, group?: IGroup): React.ReactNode => (<DetailsRow
            columns={columns}
            groupNestingDepth={nestingDepth}
            item={item}
            itemIndex={itemIndex!}
            selection={selection}
            selectionMode={SelectionMode.multiple}
            group={group}
        />),
        [columns, selection],
    );
    return (<div>
        <Text variant={'large'}> Store Structure Example</Text>
        <SelectionZone selection={selection} selectionMode={SelectionMode.multiple}>
            <GroupedList items={items}
                         onRenderCell={onRenderCell}
                         groups={groups}/>
        </SelectionZone>
    </div>);
}