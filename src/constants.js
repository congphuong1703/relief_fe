import {FacebookOutlined, LinkOutlined, MessageOutlined, XOutlined} from "@ant-design/icons";

export const ACTION_TYPE = {
    LOADING_BUTTON: 'LOADING_BUTTON',
    LOADING_TABLE: 'LOADING_TABLE'
}
export const LANGUAGE_TYPE = {
    EN: "en",
    VI: "vn"
}

export const ROUTE_PATH = {
    HOME_PAGE: '/',
    LOGIN: '/login',
    USER: '/user',
    ROLE: '/role',
    MENU: '/menu',
    NOTHING: '#',
    PERMISSION: '/permission',
    PERMISSION_FOR_ROLE: '/grant-permission-role',
    PERMISSION_FOR_USER: '/grant-permission-user',
    ANY: '*'
}

export const SHARE_SOCIAL = [
    {
        label: 'X',
        key: '`X`',
        icon: <XOutlined />
    }, {
        label: 'Zalo',
        key: 'ZALO',
        icon: <MessageOutlined />
    }, {
        label: 'Facebook',
        key: 'FACEBOOK',
        icon: <FacebookOutlined />
    }, {
        label: 'Threads',
        key: 'THREADS',
        icon: <MessageOutlined />
    }, {
        label: 'Messenger',
        key: 'MESSENGER',
        icon: <MessageOutlined />
    },
    {
        label: 'Copy link',
        key: 'COPY_LINK',
        icon: <LinkOutlined />
    },
]

export const SEARCH_TYPE = {
    CITY: 'CITY',
    DISTRICT: "DISTRICT",
    COMMUNE: "COMMUNE"
}

export const POST_TYPE = {
    ROUTE: "ROUTE",
    POST: "POST"
}
export const NEWSFEED_TYPE = {
    RESCUE: "RESCUE",
    RELIEF: "RELIEF"
}

export const ICON_TYPE = {
    GLYPHICON: "glyphicon",
    FONTAWESOME: "fa"
}

export const OPTIONS_TYPE_MARKER = [
    {
        label:"STOP",
        value:"fa-circle-0"
    },
    {
        label:"DANGER",
        value:"fa-exclamation-triangle"
    },
    {
        label:"SUPPLY",
        value:"fa-archive"
    }
]