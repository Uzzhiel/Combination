import React, { Component } from "react";

import "./App.css";

// Example of a data array that
// you might receive from an API
const data = [
  { name: "John", age: 21 },
  { name: "Mary", age: 23 },
  { name: "Alex", age: 24 },
  { name: "Sarah", age: 26 }
];
export class Person extends Component {
  render() {
    return (
      <div className="App">
        <tbody>
          <table>
            <thead>
              <th>Name</th>
              <th>Age</th>
            </thead>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                </tr>
              );
            })}
          </table>
        </tbody>
      </div>
    );
  }
}

export default Person;
