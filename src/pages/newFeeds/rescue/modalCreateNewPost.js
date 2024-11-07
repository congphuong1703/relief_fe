import {Button, Card, DatePicker, Form, Input, Modal, Select, Space} from "antd";
import {CloseOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {useState} from "react";
import {CITIES, COMMUNES, DISTRICTS} from "../../../_mock";
import {SEARCH_TYPE} from "../../../constants";
import dayjs from "dayjs";

const ModalCreateNewPost = (props) => {
    const {isOpen, onCancel, onFinish, form} = props
    const [cities, setCities] = useState(CITIES.slice(0, 10))
    const [districts, setDistricts] = useState(DISTRICTS.slice(0, 10))
    const [communes, setCommunes] = useState(COMMUNES.slice(0, 10))

    const onFinishForm = (data) => {
        console.log("data1", data)
        onFinish()
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
        <Modal open={isOpen} onCancel={onCancel} title="Đăng bài viết" width={600} footer={[
            <Space key="space">
                <Button htmlType="button" onClick={onCancel}>Đóng</Button>
                <Button type="primary" form="rescue_create_post" key="submit"
                        htmlType="submit">Xác nhận</Button>
            </Space>
        ]}>
            <Form form={form} name="rescue_create_post" onFinish={onFinishForm} labelCol={{span: 24}}
                  initialValues={{items: [{}]}}
            >
                <Form.Item name="description" required>
                    <TextArea name="description" autoSize={{minRows: 3}} placeholder="Nhập nội dung..." />
                </Form.Item>
                <Form.List name="posts">
                    {(fields, {add, remove}) => (
                        <div
                            style={{
                                display: 'flex',
                                rowGap: 8,
                                flexDirection: 'column',
                            }}
                        >
                            {fields.map((field) => (
                                <Card
                                    size="small"
                                    title={`Tỉnh/ Thành phố ${field.name + 1}`}
                                    key={`city_${field.key}`}
                                    extra={
                                        <CloseOutlined
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    }
                                >
                                    <Form.Item name={[field.name, 'city']}>
                                        <SelectCustom name="city" placeholder="Tỉnh/ Thành phố" options={cities} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Form.List name={[field.name, 'districts']}>
                                            {(districtFields, subOpt) => (
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        rowGap: 8,
                                                    }}
                                                >
                                                    {districtFields.map((subField) => (
                                                        <Card title={`Quận Huyện ${subField.name + 1}`} size="small"
                                                              key={`district_${subField.key}`}
                                                              extra={
                                                                  <CloseOutlined
                                                                      onClick={() => {
                                                                          subOpt.remove(field.name);
                                                                      }}
                                                                  />
                                                              }
                                                        >
                                                            <Form.Item noStyle name={[subField.name, 'district']}>
                                                                <SelectCustom name="district"
                                                                              placeholder="Quận Huyện"
                                                                              type={SEARCH_TYPE.DISTRICT}
                                                                              options={districts} />
                                                            </Form.Item>
                                                            <Form.List
                                                                name={[field.name, `communes_${subField.key}`]}>
                                                                {(communeFields, subOptCommune) => (
                                                                    <div
                                                                        className="mt-2"
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            rowGap: 8,
                                                                        }}
                                                                    >
                                                                        {communeFields.map((subCommuneField) => (
                                                                            <Card
                                                                                title={`Phường Xã ${subCommuneField.name + 1}`}
                                                                                key={`commune_${subCommuneField.key}`}
                                                                                size="small" extra={<CloseOutlined
                                                                                onClick={() => {
                                                                                    subOptCommune.remove(field.name);
                                                                                }}
                                                                            />}>
                                                                                <Form.Item
                                                                                    name={[subCommuneField.name, 'commune']}>
                                                                                    <SelectCustom name="commune"
                                                                                                  placeholder="Phường Xã"
                                                                                                  type={SEARCH_TYPE.COMMUNE}
                                                                                                  options={communes} />
                                                                                </Form.Item>
                                                                                <Form.Item
                                                                                    name={[subCommuneField.name, 'address']}>
                                                                                    <Input
                                                                                        placeholder="Nhập địa chỉ cụ thể"
                                                                                        name="address" />
                                                                                </Form.Item>
                                                                                <Form.Item
                                                                                    name={[subCommuneField.name, 'startDate']}>
                                                                                    <DatePicker
                                                                                        style={{width: '100%'}}
                                                                                        showTime
                                                                                        showNow
                                                                                        defaultValue={dayjs()}
                                                                                        placeholder="Ngày bắt đầu"
                                                                                        name="address" />
                                                                                </Form.Item>
                                                                            </Card>
                                                                        ))}
                                                                        <Button type="primary"
                                                                                className="mt-2"
                                                                                onClick={() => subOptCommune.add()}
                                                                                block
                                                                                ghost
                                                                                icon={<PlusOutlined />}>
                                                                            Thêm phường xã
                                                                        </Button>
                                                                    </div>
                                                                )}
                                                            </Form.List>
                                                        </Card>
                                                    ))}
                                                    <Button type="primary" ghost onClick={() => subOpt.add()} block
                                                            icon={<PlusOutlined />}>
                                                        Thêm quận huyện
                                                    </Button>
                                                </div>
                                            )}
                                        </Form.List>
                                    </Form.Item>
                                </Card>
                            ))}
                            <Button type="primary" ghost onClick={() => add()} block icon={<PlusOutlined />}>
                                Thêm lộ trình
                            </Button>
                        </div>
                    )}
                </Form.List>
            </Form>
        </Modal>
    )
}

export default ModalCreateNewPost