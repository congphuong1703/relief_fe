import {Button, Dropdown, Space, Tooltip} from "antd";
import {
    HeartFilled,
    HeartOutlined,
    MessageOutlined,
    RetweetOutlined,
    ShareAltOutlined,
    VerifiedOutlined
} from "@ant-design/icons";
import {SHARE_SOCIAL} from "../../../constants";

const CardAction = (props) => {
    const {item, message} = props
    const onShareClick = (item) => {
        switch (item.key) {
            case 'MESSENGER':
                message.info('Share via Messenger');
                break;
            case 'ZALO':
                message.info('Share via Zalo');
                break;
            case 'COPY_LINK':
                message.info('Share via Twitter');
                break;
            case 'FACEBOOK':
                message.success('Link copied!');
                break;
            case 'X':
                message.success('Link copied!');
                break;
            default:
                message.warning('Tính năng đang phát triển');
        }
    }
    return (
        <div style={{borderTop: '1px solid #f0f0f0', paddingTop: '10px', marginTop: '10px'}}>
            <Space size="large" style={{justifyContent: 'space-between', width: '100%'}}>
                <div>
                    {item.isLiked ? <Button type="text" style={{color: 'red'}} icon={<HeartFilled />} />
                        : <Button type="text" icon={<HeartOutlined />} />}
                    <Button type="text" icon={<MessageOutlined />} />
                    <Dropdown menu={{items: SHARE_SOCIAL, onClick: (item) => onShareClick(item)}} trigger='click' arrow
                              placement='top'>
                        <Button type="text" icon={<ShareAltOutlined />} />
                    </Dropdown>
                    <Button type="text" icon={<RetweetOutlined />} />
                </div>
                <div>
                    {item.isVerified &&
                        <Tooltip title="Bài viết tin cậy" color='blue'>
                            <VerifiedOutlined style={{color: 'blue'}} />
                        </Tooltip>
                    }
                </div>
            </Space>
        </div>
    )
}
export default CardAction