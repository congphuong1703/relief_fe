import Api from '../index'

export default class UserApi extends Api {
    path

    constructor() {
        super()
        this.path = 'users'
    }

    async signIn(params) {
        return await this.request({
            path: 'oauth/token',
            method: 'POST',
            params: {
                grant_type: 'password',
                client_id: process.env.REACT_APP_API,
                ...params
            }
        })
    }
}
