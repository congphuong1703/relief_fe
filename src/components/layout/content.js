import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {Layout, Spin} from "antd";
const {Content} = Layout
const TheContent = ()=>{

    return (
        <Content
            style={{
                padding: '24px 24px 10px 24px',
                margin: 0,
                minHeight: '93vh'
            }}
        >
            <Suspense fallback={<Spin/>}>
                <Outlet/>
            </Suspense>
        </Content>
    )
}
export default TheContent