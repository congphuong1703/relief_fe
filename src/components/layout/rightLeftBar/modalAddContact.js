import {Button, Form, Input, Modal, Select, Space} from "antd";
import {SEARCH_TYPE} from "../../../constants";
import {useState} from "react";
import {CITIES, COMMUNES, DISTRICTS} from "../../../_mock";

const ModalAddContact = (props) => {
    const {isOpen, onCancel, form} = props

    const [cities, setCities] = useState(CITIES.slice(0, 10))
    const [districts, setDistricts] = useState(DISTRICTS.slice(0, 10))
    const [communes, setCommunes] = useState(COMMUNES.slice(0, 10))
    const onFinishForm = (data) => {
        console.log("data", data)
    }

    const SelectCustom = ({type, options, ...rest}) => {
        return <Select allowClear style={{width: '100%'}}
                       {...rest}
                       options={options.map((ele) => {
                           return {
                               label: ele.name,
                               value: JSON.stringify(ele)
                           }
                       })}
        />
    }

    return (
        <Modal title="Thêm mới thông tin liên lạc" open={isOpen} onCancel={onCancel}
               footer={[
                   <Space key="space">
                       <Button htmlType="button" onClick={onCancel}>Đóng</Button>
                       <Button type="primary" form="add_contact" key="submit"
                               htmlType="submit">Xác nhận</Button>
                   </Space>
               ]}
        >
            <Form form={form} name="add_contact" onFinish={onFinishForm} labelCol={{span: 24}}>
                <Form.Item name="city" className="mb-0" label="Tỉnh/ Thành phố">
                    <SelectCustom name="city" placeholder="Tỉnh/ Thành phố" options={cities} />
                </Form.Item>
                <Form.Item name="district" className="mb-0" label="Quận Huyện">
                    <SelectCustom name="district" placeholder="Quận Huyện" type={SEARCH_TYPE.DISTRICT}
                                  options={districts} />
                </Form.Item>
                <Form.Item name="commune" className="mb-0" label="Phường Xã">
                    <SelectCustom name="commune" placeholder="Phường Xã" type={SEARCH_TYPE.COMMUNE}
                                  options={communes} />
                </Form.Item>
                <Form.Item name="address" className="mb-0" label="Địa chỉ cụ thể">
                    <Input placeholder="Nhập địa chỉ cụ thể" name="address" />
                </Form.Item>
                <Form.Item name="fullName" className="mb-0" label="Họ và tên" rules={[{ required: true }]}>
                    <Input placeholder="Nhập họ và tên" name="fullName" />
                </Form.Item>
                <Form.Item name="position" className="mb-0" label="Chức danh">
                    <Input placeholder="Nhập chức danh" name="position" />
                </Form.Item>
                <Form.Item name="contact" className="mb-0" label="Thông tin liên lạc" rules={[{ required: true }]}>
                    <Input placeholder="Nhập thông tin liên lạc" name="contact" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalAddContact;