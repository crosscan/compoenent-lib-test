import React, {ReactNode} from "react";
import {Button, Card, Space, Typography} from "antd";

interface CustomizedButtonProps {
    children?: ReactNode
}

const CustomizedButtonTailwind = ({children}: CustomizedButtonProps) => <Button type="primary"
                                                                                className="border-8 border-black bg-primary border-dashed rounded-lg">{children}</Button>
const CustomizedButtonInlineStyle = ({children}: CustomizedButtonProps) => <Button type="primary" style={{
    border: "4px",
    borderColor: "black",
    borderStyle: 'dashed',
    background: '#4389fd',
    borderRadius: '25%'
}}>
    {children}
</Button>

const CustomizedComponentExample = () => {
    return <Card>
        <Typography.Title level={5}>Data Display Example</Typography.Title>
        <Space direction={"horizontal"} style={{display: "flex"}}>
            <Button type={"primary"}>Original Design</Button>
            <CustomizedButtonTailwind>Custom Design Tailwind</CustomizedButtonTailwind>
            <CustomizedButtonInlineStyle>Custom Design Inline Style</CustomizedButtonInlineStyle>
        </Space>
    </Card>
}

export default CustomizedComponentExample;