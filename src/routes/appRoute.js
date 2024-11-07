import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ConfigProvider, Spin} from 'antd'
import {ROUTE_PATH} from "../constants";
import {routes} from "./index";
import i18next from "i18next";

const PublicLayout = React.lazy(
    () => import('../components/layout/publicLayout')
)
const PrivateLayout = React.lazy(
    () => import('../components/layout/privateLayout')
)

export const AppRouter = () => {
    const {t} = useTranslation()
    // const {languageType, isLoggedIn} = useSelector((state) => state.user)

    useEffect(() => {
        i18next.changeLanguage().then(() => localStorage.setItem('i18nextLng', 'VI'))
    }, [])

    return (
        <BrowserRouter>
            <React.Suspense fallback={<Spin />}>
                <ConfigProvider>
                    <Routes>
                        {/*<Route*/}
                        {/*    path={ROUTE_PATH.LOGIN}*/}
                        {/*    element={*/}
                        {/*        // isLoggedIn ? (*/}
                        {/*        // 	<Navigate to={ROUTE_PATH.HOME_PAGE} />*/}
                        {/*        // ) : (*/}
                        {/*        <PrivateLayout />*/}
                        {/*        // )*/}
                        {/*    }*/}
                        {/*>*/}
                        {/*</Route>*/}
                        <Route
                            path={ROUTE_PATH.HOME_PAGE}
                            element={
                                // isLoggedIn ? (
                                <PublicLayout />
                                // ) : (
                                // 	<Navigate to={ROUTE_PATH.LOGIN} />
                                // )
                            }
                        >
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route key={idx} path={route.path} element={route.component} />
                                    )
                                )
                            })}
                        </Route>
                    </Routes>
                </ConfigProvider>
            </React.Suspense>
        </BrowserRouter>
    )
}
