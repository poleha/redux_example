import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { name } = this.props.data;
    return <div>
      <p>Привет, {name}!</p>
    </div>
  }
}

User.propTypes = {
  //name: PropTypes.string.isRequired
};