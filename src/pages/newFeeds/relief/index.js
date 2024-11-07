import {Form, List} from "antd";
import {useEffect, useState} from "react";
import CreateNewsFeed from "../createNewsFeed";
import ModalCreateNewPost from "./modalCreateNewPost";
import CardContent from "./cardContent";

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
        isLiked: true
    },
    {
        fullName: "Lê Dương",
        title: 'Thread 2',
        content: 'This is the content of the second thread.',
        createdDate: "2024-09-12 13:00:00",
        isLiked: true

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

const ReliefFeeds = (props) => {
    const {messageApi, sendData} = props
    const [isModalPost, setIsModalPost] = useState(false)
    const [form] = Form.useForm()
    useEffect(() => {

    }, []);

    const onCancelModalPost = () => {
        setIsModalPost(false)
    }

    const onFinishModalPost = (data) => {
        console.log("data", data)
        sendData({body: data.description, type: 'LIKE', userId: data.address})
        setIsModalPost(false)
    }

    const onOpenModalPost = () => {
        form.resetFields()
        setIsModalPost(true)
    }
    return (
        <>
            <CreateNewsFeed onOpenModalPost={onOpenModalPost} />
            <List
                grid={{gutter: 16, column: 1}}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <CardContent item={item} message={messageApi} />
                    </List.Item>
                )}
            />
            <ModalCreateNewPost onCancel={onCancelModalPost} isOpen={isModalPost} onFinish={onFinishModalPost}
                                form={form} />
        </>
    )

}

export default ReliefFeeds