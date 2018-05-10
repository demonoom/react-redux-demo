import {createStore} from 'redux'
import rootReducer from '../reducers'

/**
 * initialState是从哪来的,index里调用的,传的是空
 * @param initialState
 * @returns {Store<any>}
 */
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}