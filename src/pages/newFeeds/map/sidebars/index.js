import {Descriptions, Drawer, Image, Typography} from "antd";
import {BankOutlined, FullscreenExitOutlined, UserAddOutlined} from "@ant-design/icons";
import React from "react";

const DrawerSidebar = (props) => {
    const {onDirection, setActiveMarker, activeMarker} = props
    return (
        <Drawer title="Điểm"
                placement='left'
                onClose={() => setActiveMarker(null)}
                open={activeMarker}>
            <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            <Descriptions title="Điểm" layout="horizontal" size="middle" column={1}>
                <Descriptions.Item label={<BankOutlined />}>{activeMarker.description}</Descriptions.Item>
                <Descriptions.Item label={<UserAddOutlined />}>{activeMarker.createdBy}</Descriptions.Item>
                <Descriptions.Item style={{cursor: 'pointer'}} label={<FullscreenExitOutlined />}>
                    <Typography.Text onClick={onDirection}>
                        Chỉ đường đi
                    </Typography.Text>
                </Descriptions.Item>
            </Descriptions>
        </Drawer>
    )
}
export default DrawerSidebar