import React, { Component } from 'react';
import testSchoolsData from '../test/testSchoolsData'
// const testSchoolsData = [
//   {
//     logo: 'hi',
//     name: 'hi',
//     program:'hi',
//     progress:'hi'
//   },
//   {
//     logo: 'hi',
//     name: 'hi',
//     program:'hi',
//     progress:'hi'
//   },
//   {
//     logo: 'hi',
//     name: 'hi',
//     program:'hi',
//     progress:'hi'
//   }];

class Schools extends Component {
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
          <td><img role="presentation" width="300" src={school.logo}></img></td>
          <td>{school.name}</td>
          <td>{school.program}</td>
          <td>{school.progress}</td>
        </tr>
      );
    })

  }



}

export default Schools;
