import {Timeline} from "antd";

const TimeLineRescue = () => {

    return (<Timeline
        mode='right'
        items={[
            {
                label: '2015-09-01 20:00:00',
                children: 'Create a services site ',
                color:'red'
            },
            {
                label: '2015-09-01 20:00:00',
                children: 'Solve initial network problems',
            },
            {
                label: '2015-09-01 20:00:00',
                children: 'Technical testing',
            },
            {
                label: '2015-09-01 20:00:00',
                children: 'Network problems being solved',
                color: 'green'
            },
        ]} />)
}
export default TimeLineRescue