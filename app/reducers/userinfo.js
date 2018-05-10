import * as actionTypes from '../constants/userinfo'

const initialState = {}

/**
 * B,规则派发后规则进行筛选,返回后订阅收到,将结果渲染到页面 ->C
 * @param state
 * @param action
 * @returns {{}}
 */
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:
            return action.data

        // 修改城市
        case actionTypes.UPDATE_CITYNAME:
            return action.data

        default:
            return state
    }
}