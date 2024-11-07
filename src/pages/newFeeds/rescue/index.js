import {Form, List} from "antd";
import CreateNewsFeed from "../createNewsFeed";
import CardContent from "./cardContent";
import {useState} from "react";
import ModalCreateNewPost from "./modalCreateNewPost";


const data = [
    {
        fullName: "Công Phương",
        title: 'Thread 1',
        content: 'I couldn’t stop staring at this fire escape across from our hotel room in Ogunquit, Maine. Weird view, but great at sunrise. The energy of this piece is VERY robert_abele_gallery which I don’t mind. I purchased one of his awesome tenement house paintings this summer before \n' +
            '@rachelpetruccillo\n' +
            ' could and it still haunts her.\n' +
            '.\n' +
            'Half In Dawn Light, Ogunquit\n' +
            '10”x8” oil on wood panel\n' +
            '.\n' +
            'Available on my website, or DM me.',
        createdDate: "2024-09-11 20:00:00",
        isLiked: true,
        isVerified: false
    },
    {
        fullName: "Lê Dương",
        title: 'Thread 2',
        content: 'This is the content of the second thread.',
        createdDate: "2024-09-12 13:00:00",
        isLiked: true,
        isVerified: true
    },
    {
        fullName: "Lê Dương",
        title: 'Thread 3',
        content: 'This is the content of the third thread.',
        createdDate: "2024-09-30 22:30:00",
        isLiked: false,
        isVerified: true
    },
];

const RescueFeeds = (props) => {
    const {messageApi} = props
    const [isModalPost, setIsModalPost] = useState(false)
    const [formAdd] = Form.useForm()

    const onCancelModalPost = () => {
        formAdd.resetFields()
        setIsModalPost(false)
    }

    const onFinishModalPost = (data) => {
        console.log("data", data)
    }

    return (
        <>
            <CreateNewsFeed setIsModalPost={setIsModalPost} />
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <CardContent item={item} message={messageApi} />
                    </List.Item>
                )}
            />
            <ModalCreateNewPost isOpen={isModalPost} onCancel={onCancelModalPost} onFinish={onFinishModalPost}
                                form={formAdd} />
        </>
    )
}

export default RescueFeeds