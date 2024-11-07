import {Layout} from "antd";
import {useTranslation} from "react-i18next";
import Notifications from "../../pages/notifications";
import AvatarConfig from "./avatarConfig";

const {Header} = Layout

const TheHeader = () => {
    const {t} = useTranslation()

    return (
        <Header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '0 20px'
        }}>
            {/*<div style={{display: 'flex', alignItems: 'center'}}>*/}
            {/*    <Menu mode="horizontal" style={{borderBottom: 'none', marginLeft: '20px'}}>*/}
            {/*        <Menu.Item key="home" icon={<HomeOutlined />}>{t('menu.home')}</Menu.Item>*/}
            {/*        <Menu.Item key="explore" icon={<SearchOutlined />}>{t('menu.explore')}</Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</div>*/}
            <h2 style={{margin: 0, textAlign: 'center', flex: 1}}>Bản tin</h2>
            <Notifications />
            <AvatarConfig />
        </Header>
    )
}

export default TheHeader