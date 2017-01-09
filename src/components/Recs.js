import React, { Component } from 'react';
import testRecsData from '../test/testRecsData'


class Recs extends Component {
  render() {
    return (
      <div className="Recs">
        <h1>My Recs</h1>
              <div class="recr">
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
          <td><img role="presentation" width="300" src={recr.avtr}></img></td>
          <td>{recr.name}</td>
          <td>{recr.schools["UniversityofCaliforniaIrvine"]}</td>
          <td>{recr.schools["UniversityofCaliforniaSantaBarbara"]}</td>
          <td>{recr.schools["ColumbiaUniversity"]}</td>
        </tr>
      );
    }

  )}}

    export default Recs;