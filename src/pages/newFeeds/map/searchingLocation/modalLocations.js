import {Affix, Button, Collapse, List, Modal, Typography} from "antd";
import React, {useState} from "react";
import {MenuOutlined} from "@ant-design/icons";
import {OPTIONS_TYPE_MARKER} from "../../../../constants";


const ModalLocations = (props) => {

    const [isOpenInfo, setIsOpenInfo] = useState(false)
    const {setActiveMarker, markers, setCenter} = props

    const groupedData = markers.reduce((acc, curr) => {
        console.log("curr", curr, acc)
        const type = OPTIONS_TYPE_MARKER.find(e => e.label === curr.type).value
        if (!acc[type]) {
            acc[type] = [curr];
        } else {
            acc[type].push(curr);
        }
        return acc;
    }, {});
    console.log("groupedData", groupedData)
    const onClick = (item) => {
        setIsOpenInfo(false)
        setActiveMarker(item)
        setCenter([item.lat, item.lng])

    }
    console.log("key", groupedData)
    return (
        <>
            <Affix offsetTop={100} className="container-searching">
                <Button icon={<MenuOutlined />} className="btn-list btn-border" onClick={() => setIsOpenInfo(true)}
                        title="Thông tin"></Button>
            </Affix>
            <Modal
                width={700}
                open={isOpenInfo}
                onOk={() => setIsOpenInfo(false)}
                onCancel={() => setIsOpenInfo(false)}
                title="Danh sách địa điểm">
                <div style={{maxHeight: 800, overflow: "auto"}}>
                    {Object.keys(markers).map((key, index) => {
                        const label = OPTIONS_TYPE_MARKER.find(e => e.label === markers[key].type).value
                        return (<Collapse
                            style={{marginBottom: 5}}
                            bordered
                            key={index}
                            defaultActiveKey={[index]}
                            items={[
                                {
                                    key: index,
                                    label: label,
                                    children: <List
                                        bordered
                                        dataSource={groupedData[label]}
                                        renderItem={(item) => {
                                            return (
                                                <List.Item style={{cursor: 'pointer'}} onClick={() => {
                                                    onClick(item)
                                                }}>
                                                    <Typography.Text>
                                                        {item.title}
                                                    </Typography.Text>
                                                </List.Item>
                                            )
                                        }}
                                    />
                                },
                            ]}
                        />)
                    })}
                </div>
            </Modal>
        </>
    )
}
export default ModalLocations