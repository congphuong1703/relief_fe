import {Button, Form, Layout, Typography} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import ModalFilter from "./rightLeftBar/modalFilter";
import {useState} from "react";

const {Sider} = Layout
const TheLeftBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formSearch] = Form.useForm();

    const onFinish = (form) => {
        setIsModalOpen(!isModalOpen)
    }

    const onCancelModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const onOpenModal = () => {
        setIsModalOpen(true)
    }
    return (
        <Sider width='25%' style={{backgroundColor: '#f0f2f5'}} className="pa-3">
            <Typography.Title className="text-center" level={3}>Bản tin</Typography.Title>
            <Button style={{width: '100%'}} icon={<SearchOutlined />} htmlType="button"
                    type="primary" onClick={onOpenModal}>
                Tìm kiếm
            </Button>
            <div>
                <Typography.Title className="text-center" level={3}>Xu hướng</Typography.Title>
                <Typography.Paragraph>#reactjs</Typography.Paragraph>
                <Typography.Paragraph>#javascript</Typography.Paragraph>
                <Typography.Paragraph>#webdevelopment</Typography.Paragraph>
            </div>
            <ModalFilter title="Tìm kiếm bản tin" isOpen={isModalOpen} onCancel={onCancelModal}
                         onFinish={onFinish} form={formSearch} formName="search_feeds" />
        </Sider>
    )
}

export default TheLeftBar