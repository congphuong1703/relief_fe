import {Descriptions} from "antd";

const DescriptionSearch = (props) => {
    const {searchInfo} = props
    return (
        <Descriptions className="pa-3" column={1}>
            {searchInfo.city &&
                <Descriptions.Item label="Tỉnh/ Thành phố">{JSON.parse(searchInfo.city).name}</Descriptions.Item>}
            {searchInfo.district &&
                <Descriptions.Item label="Quận Huyện">{JSON.parse(searchInfo.district).name}</Descriptions.Item>}
            {searchInfo.commune &&
                <Descriptions.Item label="Phường Xã">{JSON.parse(searchInfo.commune).name}</Descriptions.Item>}
            {searchInfo.keyword && <Descriptions.Item label="Từ khóa">{searchInfo.keyword}</Descriptions.Item>}
        </Descriptions>
    )
}

export default DescriptionSearch