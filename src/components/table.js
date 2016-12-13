import React, { Component } from 'react'
import Cell from './cell'

class Table extends Component {

  // constructor () {
  //   super()
  //   this.state = {
  //     playerOne: 'X',
  //     playerTwo: 'O',
  //     currentTurn: 'X',
  //     table: [
  //       '', '', '', '', '', '', '', '', ''
  //     ]
  //   }
  // }

  render () {
    return <table>
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
    </table>
  }
}
export default Table
