import {combineReducers} from 'redux'

import userinfo from './userinfo'

/**
 * userinfo作为一个规则,可以有跟多规则
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
    userinfo
})

export default rootReducer