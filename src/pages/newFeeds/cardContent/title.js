import {Avatar, Space, Typography} from "antd";
import {fromNow} from "../../../utils";
import {UserOutlined} from "@ant-design/icons";

const CardTitle = (props) => {
    const {item} = props
    return (
        <Space direction='horizontal'>
            <Avatar icon={<UserOutlined/>} />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography.Link className="text-link">{item.fullName}</Typography.Link>
                <Typography.Link className="text-link">{fromNow(item.createdDate)}</Typography.Link>
            </div>
        </Space>
    )
}

export default CardTitle