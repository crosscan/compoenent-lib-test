import React from "react";
import Card from "../../TailwindComponents/Card";

const TitleField = () =>  <div className="flex space-x-4 items-baseline">
    <label htmlFor="title" className="block text-sm font-medium text-gray-700 whitespace-nowrap flex-none">
        Store Title:
    </label>
        <input
            type="text"
            name="Store Title"
            id="title"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        />
</div>

const FileField = () =>  <div className="flex space-x-4 items-baseline">
    <label htmlFor="plan" className="block text-sm font-medium text-gray-700 whitespace-nowrap flex-none">
        Store Plan:
    </label>
    <input
        type="file"
        name="Store Plan"
        id="plan"
        // className="border rounded-md shadow-sm p-1"
        className="p-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary hover:border-primary hover:ring-primary sm:text-sm"
    />
</div>



const FormExample = () => <Card title={"Form Example"}>
    <div className="space-y-3">
        <TitleField/>
        <FileField/>
    </div>
</Card>

export default FormExample;