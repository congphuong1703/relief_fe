import {Button, Dropdown, Segmented} from "antd";
import {
    BellOutlined,
    DeleteOutlined,
    EditOutlined,
    EnvironmentOutlined,
    ExclamationCircleOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
    MoreOutlined,
    ReadOutlined,
    SafetyCertificateOutlined
} from "@ant-design/icons";
import {NEWSFEED_TYPE, POST_TYPE} from "../../../constants";


const CardExtra = (props) => {
    const {onChangeSegment, type} = props
    const items = [
        {
            label: 'Chỉnh sửa',
            key: '5',
            icon: <EditOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Xóa',
            key: '7',
            icon: <DeleteOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Không quan tâm',
            key: '1',
            icon: <EyeInvisibleOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Quan tâm',
            key: '8',
            icon: <EyeOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Nhận thông báo',
            key: '2',
            icon: <BellOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Báo cáo',
            key: '3',
            icon: <ExclamationCircleOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Xác thực',
            key: '4',
            icon: <SafetyCertificateOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
        {
            label: 'Bản đồ',
            key: '6',
            icon: <EnvironmentOutlined />,
            onClick: (item) => {
                console.log("k", item)
            }
        },
    ];


    return (
        <>
            {type === NEWSFEED_TYPE.RESCUE &&
                <Segmented
                    options={[
                        {value: POST_TYPE.POST, icon: <ReadOutlined />},
                        {value: POST_TYPE.ROUTE, icon: <EnvironmentOutlined />},
                    ]}
                    onChange={onChangeSegment}
                />
            }
            <Dropdown placement='bottomRight' menu={{items}} trigger='click' arrow>
                <Button icon={<MoreOutlined />} className='default-color' type='link' />
            </Dropdown>
        </>
    )
}

export default CardExtra