import {Button, Dropdown} from "antd";
import {CheckOutlined, MoreOutlined} from "@ant-design/icons";

const items = [
    {
        label: 'Đánh dấu đã đọc',
        key: '1',
        icon: <CheckOutlined />
    }
]
const ExtraNotification = () => {
    return (
        <Dropdown arrow trigger='click' placement="bottomLeft" menu={{items}}>
            <Button type='link' className="default-color" icon={<MoreOutlined />} />
        </Dropdown>
    )
}

export default ExtraNotification