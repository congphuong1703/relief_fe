import React from 'react'
import {ROUTE_PATH as RouterPath} from "../constants";


// const UserManagement = React.lazy(() => import('../pages/user/index'))
// const RoleManagement = React.lazy(() => import('../pages/role/index'))
// const PermissionForUser = React.lazy(() => import('../pages/permissionForUser/index'))
// const PermissionForRole = React.lazy(() => import('../pages/permissionForRole/index'))
// const PermissionManagement = React.lazy(() => import('../pages/permission/index'))
const NewFeedsComponent = React.lazy(() => import('../pages/newFeeds'))

export const routes = [
    {
        path: RouterPath.HOME_PAGE,
        name: 'NewFeeds',
        component: <NewFeedsComponent />,
        exact: true,
        pKey: "NewFeedsController",
        accessKey: "getPage",
        uncheckPermission: true,
    },
    // {
    //     path: RouterPath.ROLE,
    //     name: 'Role',
    //     component: <RoleManagement />,
    //     exact: true,
    //     pKey: "RoleController",
    //     accessKey: "getPage",
    //     uncheckPermission: true,
    // },
    // {
    //     path: RouterPath.PERMISSION_FOR_USER,
    //     name: 'PermissionForUser',
    //     component: <PermissionForUser />,
    //     exact: true,
    //     pKey: "PermissionController",
    //     accessKey: "getPage",
    //     uncheckPermission: true,
    // }
    // ,
    // {
    //     path: RouterPath.PERMISSION_FOR_ROLE,
    //     name: 'PermissionForRole',
    //     component: <PermissionForRole />,
    //     exact: true,
    //     pKey: "PermissionController",
    //     accessKey: "getPage",
    //     uncheckPermission: true,
    // },
    // {
    //     path: RouterPath.PERMISSION,
    //     name: 'Permission',
    //     component: <PermissionManagement />,
    //     exact: true,
    //     pKey: "PermissionController",
    //     accessKey: "getPage",
    //     uncheckPermission: true,
    // },
    // {
    //     path: RouterPath.MENU,
    //     name: 'Menu',
    //     component: <MenuManagement />,
    //     exact: true,
    //     pKey: "MenuController",
    //     accessKey: "getPage",
    //     uncheckPermission: true,
    // }
]
