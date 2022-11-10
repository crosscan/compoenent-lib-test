import React, {FC, ReactNode} from "react";

interface StackProps {
    children?: ReactNode,
    className?: string
}

const Stack: FC<StackProps> = ({children, className}) => {

    className = className ? className : "";
    return <div className={"flex-1 justify-center items-center flex-col space-y-4 min-h-screen min-w-full px-3" + className}>
        {children}
    </div>
}
export default Stack;