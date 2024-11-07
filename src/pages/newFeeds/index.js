import {message, notification, Tabs} from "antd";
import ReliefFeeds from "./relief";
import RescueFeeds from "./rescue";
import MapVisualize from "./map";
import {useSocket} from "../../hooks/useSocket";
import {useContext, useEffect} from "react";
import {ACTION_NOTIFICATION, ContextGlobal} from "../../contexts";


const NewFeeds = () => {
    const {sendData, socketResponse} = useSocket()
    const [messageApi, contextHolderMessage] = message.useMessage();
    const [notificationApi, contextHolderNotification] = notification.useNotification();
    const {dispatch} = useContext(ContextGlobal);
    const items = [
        {
            key: 1,
            label: 'Cứu trợ',
            children: <ReliefFeeds messageApi={messageApi} notificationApi={notificationApi} sendData={sendData} />
        },
        {
            key: 2,
            label: 'Trợ cứu',
            children: <RescueFeeds messageApi={messageApi} notificationApi={notificationApi} />
        },
        {
            key: 3,
            label: 'Bản đồ',
            children: <MapVisualize messageApi={messageApi} notificationApi={notificationApi} />
        },
    ]
    useEffect(() => {
        dispatch({type: ACTION_NOTIFICATION, payload: true})
    }, [socketResponse]);
    return (
        <>
            {contextHolderMessage}
            {contextHolderNotification}
            <Tabs
                defaultActiveKey="1"
                items={items}
                centered
                type='card'
                indicator={{
                    size: (origin) => origin - 20,
                    align: 'center',
                }}
            />
        </>
    )
}

export default NewFeeds