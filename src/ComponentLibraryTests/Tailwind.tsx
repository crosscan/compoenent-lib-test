import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/20/solid'
import Stack from "../TailwindComponents/Stack";
import {DataDisplayExample} from "../Tests/DataDisplay/Tailwind";
import {DateTimePickerExample} from "../Tests/DateTimePicker/Tailwind";
import Popover from "../TailwindComponents/Popover";
import FormExample from "../Tests/Form/Tailwind";
import NotificationExample from "../Tests/Notification/Tailwind";
import {NotificationContextProvider} from "../TailwindComponents/NotificationProvider";
import {StoreStructureExample} from "../Tests/StoreStructure/Tailwind";


const TailwindHeader = () => <div className="mb-4 mt-1">
    <div>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div className="flex">
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                            Component Library Test
                        </a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                        <a href="#" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                            Tailwind
                        </a>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
    <div className="ml-8 flex space-x-4 align-top">
        <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
             className="h-9 w-9"/>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Tailwind
        </h2>
    </div>
</div>

const TailwindTest = () => {
    return (<NotificationContextProvider>
        <Stack className=" pb-4">
            <TailwindHeader/>
            <DataDisplayExample/>
            <DateTimePickerExample/>
            <FormExample/>
            <NotificationExample/>
            <StoreStructureExample/>
        </Stack>
    </NotificationContextProvider>);
}

export default TailwindTest;