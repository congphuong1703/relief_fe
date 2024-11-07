import './App.css';
import {AppRouter} from './routes/appRoute'
import {ConfigProvider} from "antd";
import viVN from 'antd/es/locale/vi_VN';
import {ContextProvider} from "./contexts";


function App() {

    return (
        <ContextProvider>
            <ConfigProvider locale={viVN} theme={{
                components: {}
            }}>
                <AppRouter />
            </ConfigProvider>
        </ContextProvider>
    );
}

export default App;
