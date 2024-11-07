import moment from "moment";
import 'moment/locale/vi';

export const formatDate = (element, dateFormat = "DD/MM/YYYY") => {
    return element ? moment(element).format(dateFormat) : ''
}

export const fromNow = (element) => {
    return element ? moment(element).fromNow() : element

}

