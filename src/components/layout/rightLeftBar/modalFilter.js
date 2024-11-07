import {Button, Form, Input, Modal, Select, Space} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {CITIES, COMMUNES, DISTRICTS} from "../../../_mock";
import DescriptionSearch from "./descriptionSearch";
import {SEARCH_TYPE} from "../../../constants";

const ModalFilter = (props) => {
    const {isOpen, onCancel, title, onFinish, form, formName} = props
    const [cities, setCities] = useState(CITIES.slice(0, 10))
    const [districts, setDistricts] = useState(DISTRICTS.slice(0, 10))
    const [communes, setCommunes] = useState(COMMUNES.slice(0, 10))
    const [searchInfo, setSearchInfo] = useState({})

    const cityValue = Form.useWatch('city', form);
    const districtValue = Form.useWatch('district', form);
    const communeValue = Form.useWatch('commune', form);

    useEffect(() => {
        if (isOpen) {
            form.setFieldsValue({
                'city': searchInfo.city,
                'district': searchInfo.district,
                'commune': searchInfo.commune,
                'keyword': searchInfo.keyword
            })
        }
    }, [isOpen]);

    useEffect(() => {
        if (communeValue) {
            const communeValueObj = JSON.parse(communeValue)
            if (districtValue) {
                const districtValueObj = JSON.parse(districtValue)
                if (communeValueObj.parentCode === districtValueObj.code) {

                }
            }
        }
        form.resetFields(['district', 'city'])
    }, [communeValue])

    useEffect(() => {
        if (cityValue) {
            const cityObj = JSON.parse(cityValue)
            if (districtValue) {

            }
        }
    }, []);

    const onFinishForm = (data) => {
        setSearchInfo({
            city: data.city,
            district: data.district,
            commune: data.commune,
            keyword: data.keyword
        })

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
        <>
            <Modal title={title} open={isOpen} onCancel={onCancel}
                   footer={[
                       <Space key="space">
                           <Button htmlType="button" onClick={onCancel}>Đóng</Button>
                           <Button type="primary" form={formName} key="submit"
                                   htmlType="submit">Tìm kiếm</Button>
                       </Space>
                   ]}
            >
                <Form form={form} name={formName} onFinish={onFinishForm} labelCol={{span: 24}}>
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
                    <Form.Item name="keyword" className="mb-0" label="Từ khóa">
                        <Input placeholder="Nhập từ khóa" name="keyword" prefix={<SearchOutlined />} />
                    </Form.Item>
                </Form>
            </Modal>
            <DescriptionSearch searchInfo={searchInfo} />
        </>

    )
}

export default ModalFilter;