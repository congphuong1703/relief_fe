export default class CamelCaseConverter {
    static convertKeys = (inputCase, input) => {
        const convertFunc =
            inputCase === 'camel'
                ? CamelCaseConverter.toCamel
                : CamelCaseConverter.toSnake
        if (CamelCaseConverter.isObject(input)) {
            const n: ConvertedType = {}

            Object.keys(input).forEach((k) => {
                n[convertFunc(k)] = CamelCaseConverter.convertKeys(inputCase, input[k])
            })

            return n
        }
        if (Array.isArray(input)) {
            return input.map((i) => {
                return CamelCaseConverter.convertKeys(inputCase, i)
            })
        }

        return input
    }

    static toCamel = (string) => {
        return string.replace(/([-_][a-z])/gi, ($1) => {
            return $1.toUpperCase().replace('-', '').replace('_', '')
        })
    }

    static toSnake = (string) => {
        return string
        .replace(/[\w]([A-Z])/g, (m) => {
            return `${m[0]}_${m[1]}`
        })
        .toLowerCase()
    }

    static isObject = (o) => {
        return o === Object(o) && !Array.isArray(o) && typeof o !== 'function'
    }
}