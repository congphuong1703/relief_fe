import {Button, Form, Layout, Space, Typography} from "antd";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";
import {useMemo, useState} from "react";
import {COMMUNES, DISTRICTS} from "../../_mock";
import {CONTACTS} from "../../_mock/contacts";
import ModalFilter from "./rightLeftBar/modalFilter";
import TableCustom from "../table";
import ModalAddContact from "./rightLeftBar/modalAddContact";

const {Sider} = Layout

const districtMap = DISTRICTS.reduce((map, district) => {
    if (!map[district.parentCode]) {
        map[district.parentCode] = [];
    }
    map[district.parentCode].push(district);
    return map;
}, {});


const getCommunesByCity = (cityCode) => {
    const districtsInCity = districtMap[cityCode] || [];

    return districtsInCity.flatMap(district => communeMap[district.code] || []);
}

const getDistrictsByCity = (cityCode) => {
    return districtMap[cityCode] || [];
}

const communeMap = COMMUNES.reduce((map, commune) => {
    if (!map[commune.parentCode]) {
        map[commune.parentCode] = [];
    }
    map[commune.parentCode].push(commune);
    return map;
}, {});


const TheRightBar = () => {
    const [isModalSearch, setIsModalSearch] = useState(false)
    const [isModalAdd, setIsModalAdd] = useState(false)
    const [formAdd] = Form.useForm();
    const [formSearch] = Form.useForm();
    const [dataFilter, setDataFilter] = useState()
    const [contacts, setContacts] = useState({
        data: CONTACTS,
        size: 5,
        page: 1,
        total: 10
    })

    const onFinish = (data) => {
        console.log("form", data, formSearch.getFieldsValue())
        setIsModalSearch(false)
    }

    const onCancelModal = () => {
        setIsModalSearch(false)
        setIsModalAdd(false)
    }

    const onAddModal = () => {
        formAdd.resetFields()
        formAdd.setFieldsValue({
            "city": formSearch.getFieldsValue().city,
            "district": formSearch.getFieldsValue().district,
            "commune": formSearch.getFieldsValue().commune,
        })
        setIsModalAdd(true)
    }

    const columns = useMemo(() => [
        {
            title: '',
            render: (_, item) => {
                return (
                    <Space direction='vertical' key={item.fullName}>
                        <Typography.Text> {item.fullName} - {item.position}</Typography.Text>
                        <Typography.Text> {item.phoneNumber} ({item.cityCode} - {item.districtCode} - {item.communeCode})</Typography.Text>
                    </Space>
                )
            }
        }
    ], [])

    return (
        <Sider width='25%' style={{backgroundColor: '#f0f2f5'}} className="pa-3">
            <Typography.Title className="text-center" level={3}>Liên hệ</Typography.Title>
            <div style={{display: 'flex', gap: 8}}>
                <Button icon={<SearchOutlined />} block htmlType="button"
                        type="primary" onClick={() => setIsModalSearch(true)}>
                    Tìm kiếm
                </Button>
                <Button icon={<PlusOutlined />} block htmlType="button"
                        type="primary" onClick={onAddModal}>
                    Thêm mới
                </Button>
            </div>
            <ModalAddContact isOpen={isModalAdd} onCancel={onCancelModal} form={formAdd} />
            <ModalFilter title="Tìm kiếm thông tin liên hệ" isOpen={isModalSearch} onCancel={onCancelModal}
                         onFinish={onFinish} form={formSearch} formName="search_info" />
            <TableCustom showHeader={false} columns={columns} dataTable={contacts} setDataFilter={setDataFilter} />
        </Sider>
    )
}


export default TheRightBar