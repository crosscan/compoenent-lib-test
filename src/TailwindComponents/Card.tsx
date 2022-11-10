import React, {FC, ReactNode} from "react";

interface CardHeaderProps {
    title: string
}

const CardHeader = ({title}: CardHeaderProps) => {
    return (
        <div className="px-4 pt-4 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        </div>
    )
}

interface CardProps {
    title?: string
    children?: ReactNode
}

const Card : FC<CardProps>= ({children, title}) => {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            {title &&<CardHeader title={title}/>}
            <div className="px-4 py-2.5 sm:p-6">{children}</div>
        </div>
    )
}


export default Card;