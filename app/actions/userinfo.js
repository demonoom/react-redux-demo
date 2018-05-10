import * as actionTypes from '../constants/userinfo'

/**
 * A+,login被调用之后返回type和data,然后到规则那里,这里返回的都做为action ->B
 * @param data
 * @returns {{type, data: *}}
 */
export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export function updateCityName(data) {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}