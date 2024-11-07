import {Typography} from "antd";
import ExtraNotification from "./extra";

const TitleNotification = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography.Text>
                Thông báo
            </Typography.Text>
            <ExtraNotification />
        </div>
    )
}

export default TitleNotification