import {List} from "antd";

const notifications = [
    {id: 1, message: 'You have a new message'},
    {id: 2, message: 'Your task has been completed'},
    {id: 3, message: 'Meeting at 10 AM'}
]
const ContentNotification = () => {
    return (
        <List
            size="small"
            dataSource={notifications}
            renderItem={(item) => (
                <List.Item key={item.id}>{item.message}</List.Item>
            )}
        />
    )
}

export default ContentNotification