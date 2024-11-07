import {Button, Form, Input, Modal, Select, Space} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from 'react'

const types = [
    {
        label: 'Điểm dừng chân',
        value: 'STOP'
    },
    {
        label: 'Điểm nguy hiểm',
        value: 'DANGER'
    },
    {
        label: 'Điểm tiếp tế',
        value: "SUPPLY"
    }
]
const ModalAddInfoToPoint = React.memo((props) => {
    const {isOpen, onCancel, form, onFinish} = props
    const onFinishForm = (data) => {
        onFinish(data)
    }
    return (
        <Modal form="create_point"
               onCancel={onCancel}
               title="Thêm thông tin cho điểm"
               open={isOpen}
               footer={[
                   <Space key="space">
                       <Button type="primary" form="create_point" key="submit"
                               htmlType="submit">Lưu</Button>
                   </Space>
               ]}
        >
            <Form name="create_point" onFinish={onFinishForm} form={form} labelCol={{span: 24}}>
                <Form.Item name="lat" className="mb-0" label="Lat" hidden>
                    <Input name="lat" />
                </Form.Item>
                <Form.Item name="lng" className="mb-0" label="Lng" hidden>
                    <Input name="lng" />
                </Form.Item>
                <Form.Item name="title" className="mb-0" label="Tiêu đề" required>
                    <Input name="title" placeholder="Tiêu đề"/>
                </Form.Item>
                <Form.Item name="type" className="mb-0" label="Loại điểm">
                    <Select name="type" placeholder="Loại điểm" options={types} />
                </Form.Item>
                <Form.Item name="description" className="mb-0" label="Mô tả">
                    <TextArea name="description" autoSize={{minRows: 3}} placeholder="Mô tả" />
                </Form.Item>
            </Form>
        </Modal>
    )
})

export default ModalAddInfoToPoint