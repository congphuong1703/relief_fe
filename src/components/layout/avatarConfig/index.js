import {Avatar, List, Popover} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";

const configDataSource = [
    {id: 2, message: 'Cài đặt', icon: <Avatar icon={<SettingOutlined />} className="mr-2"/>},
    {id: 3, message: 'Đăng xuất', icon: <Avatar icon={<LogoutOutlined />} className="mr-2"/>}
]
const AvatarConfig = () => {

    const Content = () => {
        return (
            <List
                size="small"
                header={<List.Item className="cursor-pointer">{<Avatar icon={<UserOutlined />} className="mr-2" />} Phương Công</List.Item>}
                dataSource={configDataSource}
                renderItem={(item) => (
                    <List.Item key={item.id} className="cursor-pointer">{item.icon} {item.message}</List.Item>
                )}
            />
        )
    }

    return (
        <Popover arrow content={<Content />} placement="bottomLeft"
                 trigger='click'>
            <Avatar size="large" className="ml-2" icon={<UserOutlined />} />
        </Popover>
    )
}

export default AvatarConfig