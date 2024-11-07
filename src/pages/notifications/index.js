import {Avatar, Badge, Popover} from "antd";
import {BellOutlined} from "@ant-design/icons";
import ContentNotification from "./content";
import TitleNotification from "./title";
import {useContext} from "react";
import {ACTION_NOTIFICATION, ContextGlobal} from "../../contexts";

const Notifications = () => {
    const {state, dispatch} = useContext(ContextGlobal);
    const onReadNotification = () => {
        dispatch({type: ACTION_NOTIFICATION, payload: false})
    }
    return (
        <>
            <Badge dot={state.isNotification}>
                <Popover title={<TitleNotification />} arrow content={<ContentNotification />} placement="bottomLeft"
                         trigger='click'>
                    <Avatar size="large" onClick={onReadNotification} icon={<BellOutlined />} />
                </Popover>
            </Badge>

        </>
    )
}

export default Notifications