import React, {FC} from "react";

interface ButtonProps {
    title: string,
    onClick?: ()=>void
}

const Button: FC<ButtonProps> = ({title, onClick}) => <button
    type="button"
    className="inline-flex items-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={onClick}
>
    {title}
</button>

export default Button;