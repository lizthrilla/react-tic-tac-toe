import React, { Component } from 'react'
// import styles from './cell.scss'

class Cell extends Component {

  constructor () {
    super()
    this.state = {
      playerOne: 'X',
      playerTwo: 'O',
      currentTurn: 'X',
      table: [' '],
      winner: null,
      empty: ' '
    }
  }

  handleClick = (e) => {
    this.setState({
      currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
    })
    console.log(this.state.currentTurn)
  }

  render () {
    return <td id='0' onClick={e => this.handleClick(e.target.id)}> {this.state.currentTurn} </td>
  }
}

export default Cell
