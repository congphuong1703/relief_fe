import Axios from 'axios'
import {store} from '../store'
import userSlice from '../store/reducers/user'
import CamelCaseConverter from '../components/convert'
import setupAxiosInterceptors from '../components/axios'

export default class Api {
    http
    dispatch
    store

    // TODO: _ is the old user token. Refactor away!
    /* eslint-disable */

    // @ts-ignore
    constructor(url) {
        /* eslint-enable */
        // TODO: Implement version
        this.store = store
        this.dispatch = store.dispatch
        this.http = Axios.create({
            baseURL: url || process.env.REACT_APP_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setupAxiosInterceptors(userSlice, this.http, this.store.dispatch, store)
    }

// Convert snake_case to camelCase
    snakeToCamel = (object) => {
        return CamelCaseConverter.convertKeys('camel', object)
    }

// Convert camelCase to snake_case
    camelToSnake = (object) => {
        return CamelCaseConverter.convertKeys('snake', object)
    }

// convert object to FormData
    toFormData = (object) => {
        const formData = new FormData()
        Object.keys(object).forEach((k) => {
            if (object[k] !== undefined) {
                if (['photoCover', 'logo'].includes(k) && typeof object[k] === 'string')
                    return
                if (Array.isArray(object[k])) {
                    object[k].forEach((element) => {
                        formData.append(`${CamelCaseConverter.toSnake(k)}[]`, element)
                    })
                } else {
                    formData.append(CamelCaseConverter.toSnake(k), object[k])
                }
            }
        })
        return formData
    }

// Return i18n strings from API error
    handleError = (errResponse) => {
        if (!errResponse) {
            return 'errors.system'
        }

        if (errResponse?.error) {
            return errResponse?.error
        }

        return errResponse?.errors?.map((x) => `errors.${x.code}`)
    }

    async request(req) {
        try {
            let snakeCasedParams
            let snakeCasedBody = req.body
            // for POST and PATCH request, will use `body` instead of `params`
            if (req.params) {
                if (req.method === 'PATCH' || req.method === 'POST') {
                    snakeCasedBody = JSON.stringify(this.camelToSnake(req.params))
                } else {
                    snakeCasedParams = this.camelToSnake(req.params)
                }
            } else if (req.body && !(req.body instanceof FormData)) {
                snakeCasedBody = JSON.stringify(this.camelToSnake(req.body))
            }
            const config = {
                method: req.method,
                url: req.path,
                params: snakeCasedParams,
                data: snakeCasedBody,
                headers: req.headers,
                responseType: req.responseType || 'json'
            }
            const res = await this.http.request(config)
            if (config.responseType === 'blob') {
                return {
                    status: 'success',
                    result: res.data
                }
            }

            return this.parseData(res)
        } catch (err) {
            const errors = this.handleError((err)?.response?.data)
            return {
                status: 'failed',
                errors
            }
        }
    }

    parseData(res) {
        const parsedData = this.snakeToCamel(res.data)
        return {
            status: 'success',
            result: parsedData
        }
    }
}
