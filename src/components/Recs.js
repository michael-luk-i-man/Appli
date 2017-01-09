import React, { Component } from 'react';
import testRecsData from '../test/testRecsData'


class Me extends Component {
  render() {
    return (
      <div className="Schools">
        <h1>My Schools</h1>
              <div class="school">
                <table>
                { this.createRecsTable() }

                </table>
                </div>
      </div>
    );
  }

  createRecsTable() {
    return testRecsData.map( recr => {
      return (
        <tr>
          <td><img width="300" src={recr.avtr}></img></td>
          <td>{recr.name}</td>
          <td>{recr.schools.UniversityofCaliforniaIrvine}</td>
          <td>{recr.schools.UniversityofCaliforniaSantaBarbara}</td>
        </tr>
      );
    }

  )}}