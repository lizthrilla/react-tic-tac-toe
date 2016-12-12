import React, { Component } from 'react'
import styles from '../styles/screen.scss'
// import Cell from './cell.js'

class App extends Component {

  constructor () {
    super()
    this.state = {
      playerOne: 'X',
      playerTwo: 'O',
      currentTurn: 'X',
      table: [
        '', '', ''
      ]
    }
  }

  handleClick = () => {
    this.setState({
      currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
    })
    console.log(this.state.currentTurn)
  }

  render () {
    // const playerOne = this.state.symbolX
    // const playerTwo = this.state.symbolX
    return <div className={styles}>
      <h1>Tic Tac Toe</h1>
      <h2>Player X Goes</h2>
      <table>
        <tbody>
          <tr>
            <td id='0' onClick={e => this.handleClick(e.target.id)}> {this.state.currentTurn} </td>
            <td id='1' onClick={e => this.handleClick(e.target.id)}> {this.state.currentTurn} </td>
            <td id='2' onClick={e => this.handleClick(e.target.id)}> {this.state.currentTurn}</td>
          </tr>
        </tbody>
      </table>
      <div className='overlay'>
        <div className='dialog'>
          <h3> !!! </h3>
          <button type='reset' name='reset'> Play Again </button>
        </div>
        <h6>&copy; Liz Tiller TIY student 2016</h6>
      </div>
    </div>
  }
}

export default App
