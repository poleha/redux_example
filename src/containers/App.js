import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props;


    return <div>
      <User data={user} />
      <Page data={page} actions={this.props.pageActions} />
    </div>
  }
}

//Устанавливаем соответствие глобального state props каждого компонента
function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}



function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
    //we bind Action Creator to dispatch http://redux.js.org/docs/Glossary.html#action-creator
    //this created action is immediately dispatched
    //Вместо этого мы можем передавать store во все компоненты, начиная с App, при нажатии на кнопку генерировать
    //action и this.props.store.dispatch(action);
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
