import {Layout} from "antd";
import TheContent from "./content";
import TheRightBar from "./rightBar";
import TheLeftBar from "./leftBar";
import TheHeader from "./header";

const {Footer} = Layout;

const PublicLayout = () => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            {/* Header */}
            <TheHeader />
            <Layout>
                {/* Sidebar */}
                <TheLeftBar />
                {/* Content */}
                <TheContent />
                <TheRightBar />
            </Layout>

            {/* Footer */}
            <Footer style={{textAlign: 'center'}}>Bản tin cứu trợ phi lợi nhuận@2024</Footer>
        </Layout>
    )
}

export default PublicLayout