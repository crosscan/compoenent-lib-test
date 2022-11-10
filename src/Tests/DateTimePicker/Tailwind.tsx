import React, {useRef, useState} from "react";
import Card from "../../TailwindComponents/Card";
import {useDateRangePicker} from "@react-aria/datepicker";
import {useDateRangePickerState} from "react-stately";
import {DateField} from "./Helper/DateField";
import {FieldButton} from "./Helper/Button";
import {CalendarIcon, ExclamationCircleIcon} from "@heroicons/react/24/outline";
import {RangeCalendar} from "./Helper/RangeCalendar";
import {now,today, getLocalTimeZone} from "@internationalized/date";
import Popover from "../../TailwindComponents/Popover";
import {TimeField} from "./Helper/TimeField";

const DateRangePicker = (props: any) => {
    let state = useDateRangePickerState(props);
    let ref: any = useRef();
    let {
        groupProps,
        labelProps,
        startFieldProps,
        endFieldProps,
        buttonProps,
        calendarProps
    } = useDateRangePicker(props, state, ref);

    const [open, setOpen] = useState(false);


    return (
        <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
            <div {...groupProps} ref={ref} className="flex group">
                <div
                    className="flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors rounded-l-md pr-10 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600 p-1 relative">
                    <DateField {...startFieldProps} />
                    <span aria-hidden="true" className="px-2">
                        –
                    </span>
                    <DateField {...endFieldProps} />
                    {state.validationState === "invalid" && (
                        <ExclamationCircleIcon className="w-6 h-6 text-red-500 absolute right-1"/>
                    )}
                </div>
                <FieldButton {...buttonProps} isPressed={state.isOpen} onClick={() => setOpen(true)}>
                    <CalendarIcon className="w-5 h-5 text-gray-700 group-focus-within:text-violet-700"/>
                </FieldButton>
            </div>
            {state.isOpen && (
                <Popover open={open} setOpen={setOpen}>
                    <RangeCalendar {...calendarProps} />
                    <div className="flex gap-2">
                        <TimeField
                            label="Start time"
                            value={state.timeRange?.start || null}
                            onChange={(v: any) => state.setTime("start", v)}
                        />
                        <TimeField
                            label="End time"
                            value={state.timeRange?.end || null}
                            onChange={(v: any) => state.setTime("end", v)}
                        />
                    </div>
                </Popover>
            )}
        </div>
    );
}

export const DateTimePickerExample = () => <Card title="Date Time Picker Example">
    <DateRangePicker
        label="Date Range"
        maxValue={now(getLocalTimeZone())}
        defaultValue={{
            start: now(getLocalTimeZone()).subtract({ weeks: 1 }),
            end: now(getLocalTimeZone())
        }}
    />
</Card>