import React, { Component } from 'react';
import testRecsData from '../test/testRecsData'


class Me extends Component {
  render() {
    return (
      <div className="Schools">
        <h1>My Schools</h1>
              <div class="school">
                <table>
                { this.createSchoolsTable() }

                </table>
                </div>
      </div>
    );
  }

  createSchoolsTable() {
    return testSchoolsData.map( school => {
      return (
        <tr>
          <td><img width="300" src={school.logo}></img></td>
          <td>{school.name}</td>
          <td>{school.program}</td>
          <td>{school.progress}</td>
        </tr>
      );
    })

  }