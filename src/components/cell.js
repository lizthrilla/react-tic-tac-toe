import React, { Component } from 'react'
// import styles from './cell.scss'

class Cell extends Component {

  static propTypes = {
    index: React.PropTypes.number,
    handleClick: React.PropTypes.func,
    value: React.PropTypes.string
  }

  // handleClick = (e) => {
  //   this.setState({
  //     currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
  //   })
  //   console.log(this.state.currentTurn)
  // }

  render () {
    return <td onClick={() => this.props.handleClick(this.props.index)}> {this.props.value} </td>
  }
}

export default Cell
