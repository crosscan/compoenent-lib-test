import React, {FC, useCallback, useMemo, useState} from 'react';
import {
    DatePicker,
    DayOfWeek,
    DetailsRow,
    GroupedList, IButtonProps,
    IColumn,
    IGroup, initializeIcons, IObjectWithKey,
    MessageBar,
    MessageBarType,
    PartialTheme,
    PrimaryButton,
    Selection,
    SelectionMode,
    SelectionZone,
    Stack, TeachingBubble,
    Text,
    TextField,
    ThemeProvider
} from "@fluentui/react";
import {TestProps} from "../App";

const DateTimePickerExample: FC = () => {
    return (
        <div>
            <Text variant={'large'}>Date Picker Example</Text>
            <DatePicker firstDayOfWeek={DayOfWeek.Monday} placeholder={"Select date"} ariaLabel={"Select a date"}/>
        </div>
    );
};

const DataDisplayExample = () => {
    return <div>
        <Text variant={'large'}>Data Display Example</Text>
        <MessageBar messageBarType={MessageBarType.info}>Keine Tabellenkomponente vorhanden.</MessageBar>
    </div>
}

const FormExample: FC = () => {
    return <div>
        <Text variant={'large'}>Form Example</Text>
        <TextField label={"Store Title"}/>
    </div>
}


const NotificationExample: FC = () => {
    const buttonId = 'targetButton';
    const [teachingBubbleVisible, setTeachingBubbleVisible] = useState<boolean>(false);
    const toggleTeachingBubbleVisible = useCallback(() => {
        setTeachingBubbleVisible(!teachingBubbleVisible)
    }, [teachingBubbleVisible, setTeachingBubbleVisible])
    const exampleSecondaryButtonProps: IButtonProps = React.useMemo(
        () => ({
            children: 'Maybe later',
            onClick: toggleTeachingBubbleVisible,
        }),
        [toggleTeachingBubbleVisible],
    );
    return <Stack>
        <Text variant={'large'}>Notification Example</Text>
        <PrimaryButton onClick={() => setTeachingBubbleVisible(true)} id={buttonId}>Create
            Notification</PrimaryButton>
        {teachingBubbleVisible && (
            <TeachingBubble
                target={`#${buttonId}`}
                primaryButtonProps={exampleSecondaryButtonProps}
                onDismiss={toggleTeachingBubbleVisible}
                headline="Example teaching bubble"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam
                magni
                harum non?
            </TeachingBubble>
        )}
    </Stack>
}


interface ItemType extends IObjectWithKey {
    id: number,
    name: string
}

const StoreStructureExample: FC = () => {
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

const FluentTest = ({themeColor}: TestProps) => {
    initializeIcons();
    let theme: PartialTheme = {};
    if (themeColor !== undefined) {
        theme.palette = {...theme.palette, themePrimary: themeColor}
    }

    return <ThemeProvider theme={theme}>
        <Stack gap={10}>
            <Text variant={'superLarge'}>Microsoft Fluent</Text>
            <DataDisplayExample/>
            <DateTimePickerExample/>
            <FormExample/>
            <NotificationExample/>
            <StoreStructureExample/>
        </Stack>
    </ThemeProvider>;
}

export default FluentTest;