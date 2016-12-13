import React, { Component } from 'react'
import styles from '../styles/screen.scss'
import Cell from './cell'

class App extends Component {

  constructor () {
    super()
    this.state = {
      playerOne: 'X',
      playerTwo: 'O',
      currentTurn: 'X',
      table: [
        '', '', '', '', '', '', '', '', ''
      ],
      winner: null,
      value: null
    }
  }

  handleClick = (index) => {
    const newTable = this.state.table.slice()
    newTable[index] = this.state.currentTurn
    if (this.check(newTable, this.state.currentTurn)) {
      console.log(this.state.currentTurn, 'HAS WON')
    }
    this.setState({
      table: newTable,
      currentTurn: this.state.currentTurn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
    })
    console.log(this.state.currentTurn)
  }

  check (table, player) {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 3, 6]
    ]

    winCombos.forEach((combo) => {
      if (combo.every((p) => {
        return table[p] === player
      })) {
        return true
      }
    })
    return false
  }

  gameOver = (xWon) => {
    if (xWon) {
      document.querySelector('.dialog h3').textContent = 'Player X Won!'
    } else {
      document.querySelector('.dialog h3').textContent = 'Player O won!'
    }
    document.querySelector('body').className = 'modal'
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
            <Cell index={0} value={this.state.table[0]} handleClick={this.handleClick} />
            <Cell index={1} value={this.state.table[1]} handleClick={this.handleClick} />
            <Cell index={2} value={this.state.table[2]} handleClick={this.handleClick} />
          </tr>
          <tr>
            <Cell index={3} value={this.state.table[3]} handleClick={this.handleClick} />
            <Cell index={4} value={this.state.table[4]} handleClick={this.handleClick} />
            <Cell index={5} value={this.state.table[5]} handleClick={this.handleClick} />
          </tr>
          <tr>
            <Cell index={6} value={this.state.table[6]} handleClick={this.handleClick} />
            <Cell index={7} value={this.state.table[7]} handleClick={this.handleClick} />
            <Cell index={8} value={this.state.table[8]} handleClick={this.handleClick} />
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
