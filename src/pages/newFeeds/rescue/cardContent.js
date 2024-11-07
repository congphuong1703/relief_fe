import {Card} from "antd";
import CardTitle from "../cardContent/title";
import CardExtra from "../cardContent/extra";
import CardAction from "../cardContent/action";
import {NEWSFEED_TYPE, POST_TYPE} from "../../../constants";
import {useState} from "react";
import TimeLineRescue from "./timeLine";
import CardBody from "../cardContent/content";


const CardContent = (props) => {
    const {item} = props
    const [postType, setPostType] = useState(POST_TYPE.POST)
    const onChangeSegment = (value) => {
        console.log("value", value)
        setPostType(value)
    }
    return (
        <Card title={<CardTitle item={item} />}
              extra={<CardExtra item={item} type={NEWSFEED_TYPE.RESCUE} onChangeSegment={onChangeSegment} />}
        >
            {postType === POST_TYPE.ROUTE ? <TimeLineRescue /> : <CardBody {...props} />}
            <CardAction {...props} />
        </Card>
    )
}

export default CardContent