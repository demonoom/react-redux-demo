import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }

    componentDidMount() {
        // 模拟登陆
        //A.userinfoActions触发bindActionCreators,进行派发,之后直接到规则那里 ->A+
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

/**
 * 这两个函数是做什么用的,state参数是从哪里传过来的(作用:将state.userinfo绑定到react的props中)
 * 通过connect与Hello封装之后,mapStateToProps返回的key userinfo 就会变成Hello中this.props中的值,可以通过this.props.userinfo拿取它
 * state.userinfo 类似于demo中的store.getState()直接获取state值 这里在定义规则时combineReducers的规则是userinfo,因此取得是state.userinfo(生成store后,定义的规则[combineReducers({userinfo})]就会在这个state中)
 * 一旦进行dispatch,规则userinfo会触发,state.userinfo会改变,this.props.userinfo就会改变,会触发react的update
 * C,订阅被触发,props改变,react会渲染到页面
 * @param state
 * @returns {{userinfo: *}}
 */
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

/**
 * dispatch是从哪里传过来的
 * @param dispatch
 * @returns {{userinfoActions: (ActionCreator<any> | ActionCreatorsMapObject)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)