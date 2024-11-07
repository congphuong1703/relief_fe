import {Avatar, Button, Card, Space, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";


const CreateNewsFeed = (props) => {
    const {onOpenModalPost} = props
    return (
        <Card>
            <Space align="center" style={{justifyContent: 'space-between', width: '100%'}}>
                <Avatar icon={<UserOutlined />} />
                <div className="flex-start-end" onClick={onOpenModalPost}>
                    <Typography.Text className="ml-2">
                        Đăng bài viết...
                    </Typography.Text>
                </div>
                <Button onClick={onOpenModalPost}>Đăng bài</Button>
            </Space>
        </Card>
    )
}

export default CreateNewsFeed