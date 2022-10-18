import React, {FC} from 'react';
import 'antd/dist/antd.variable.css';
import {BreadcrumbProps, ConfigProvider, PageHeader, Space} from "antd";
import deDe from 'antd/es/locale/de_DE';
import {TestProps} from "../App";
import {DateTimePickerExample} from "../Tests/DateTimePicker/AntDesign";
import {DataDisplayExample} from "../Tests/DataDisplay/AntDesign";
import {FormExample} from "../Tests/Form/AntDesign";
import {NotificationExample} from "../Tests/Notification/AntDesign";
import {StoreStructureExample} from "../Tests/StoreStructure/AntDesign";

const AntDesignTest: FC<TestProps> = ({themeColor}: TestProps) => {
    if (themeColor !== undefined) {
        ConfigProvider.config({theme: {primaryColor: themeColor}})
    }
    const routes: BreadcrumbProps = {
        routes: [{path: 'index', breadcrumbName: 'Component Library Test'}, {
            path: 'first',
            breadcrumbName: 'Ant Design'
        }]
    };
    return (<ConfigProvider locale={deDe}>
        <Space direction={"vertical"} style={{display: "flex", marginLeft: "1em", marginRight: "1em"}}>
            <PageHeader title={"Ant Design"} breadcrumb={routes}
                        avatar={{src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}}>
            </PageHeader>
            <DataDisplayExample/>
            <DateTimePickerExample/>
            <FormExample/>
            <NotificationExample/>
            <StoreStructureExample/>
        </Space>
    </ConfigProvider>);
}

export default AntDesignTest;