import React, {FC} from 'react';
import 'antd/dist/antd.variable.css';
import {Card, Form, Input, Typography, Upload} from "antd";

export const FormExample: FC = () => {
    return <Card>
        <Typography.Title level={5}>Form Example</Typography.Title>
        <Form>
            <Form.Item label={"Store Title"}>
                <Input/>
            </Form.Item>
            <Form.Item label={"Store Plan"}>
                <Upload.Dragger>
                    <Typography>Click or drag file to this area to Upload</Typography>
                </Upload.Dragger>
            </Form.Item>
        </Form>
    </Card>
}