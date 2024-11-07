import {Button, Form, Input, Modal, Select, Space} from "antd";
import React, {useState} from "react";
import {CITIES, COMMUNES, DISTRICTS} from "../../../_mock";
import TextArea from "antd/es/input/TextArea";
import {SEARCH_TYPE} from "../../../constants";


const ModalCreateNewPost = React.memo((props) => {
    const {onCancel, isOpen, onFinish, form} = props
    const [cities, setCities] = useState(CITIES.slice(0, 10))
    const [districts, setDistricts] = useState(DISTRICTS.slice(0, 10))
    const [communes, setCommunes] = useState(COMMUNES.slice(0, 10))
    const onFinishForm = (data) => {
        console.log("data", data)
        onFinish(data)
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
        <Modal form="create_new_feeds"
               onCancel={onCancel}
               title="Đăng bản tin"
               open={isOpen}
               footer={[
                   <Space key="space">
                       <Button type="primary" form="create_new_feeds" key="submit"
                               htmlType="submit">Đăng tin</Button>
                   </Space>
               ]}
        >
            <Form name="create_new_feeds" onFinish={onFinishForm} form={form} labelCol={{span: 24}}>

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
                <Form.Item name="description" className="mb-0" label="Thông tin">
                    <TextArea autoSize={{minRows: 3,}} placeholder="Nhập nội dung..."
                              name="description" />
                </Form.Item>

            </Form>
        </Modal>
    )
})

export default ModalCreateNewPost