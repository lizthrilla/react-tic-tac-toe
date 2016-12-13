import React, { Component } from 'react'
import styles from '../styles/screen.scss'
import Cell from './cell'
import Table from './table'

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
      winner: null
    }
  }

  render () {
    // const playerOne = this.state.symbolX
    // const playerTwo = this.state.symbolX
    return <div className={styles}>
      <h1>Tic Tac Toe</h1>
      <h2>Player X Goes</h2>
      <Table />
      {/* <table>
        <tbody>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </tbody>
      </table> */}
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
