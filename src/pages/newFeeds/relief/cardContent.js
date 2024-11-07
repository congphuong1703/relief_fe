import {Card} from "antd";
import CardTitle from "../cardContent/title";
import CardExtra from "../cardContent/extra";
import CardBody from "../cardContent/content";
import CardAction from "../cardContent/action";

const CardContent = (props) => {
    const {item} = props

    return (
        <Card title={<CardTitle item={item} />}
              extra={<CardExtra item={item} />}
        >
            <CardBody {...props} />
            <CardAction {...props} />
        </Card>
    )
}

export default CardContent