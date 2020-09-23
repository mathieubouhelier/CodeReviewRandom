import React from 'react';
import randomList from '../data/randomList.json';

function RandomList() {
  return (
    <div>
      <h1>Random list</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Quem faz</th>
            <th> De quem</th>
          </tr>
          {randomList.map((item) => (
            <tr>
              <td>{item.A}</td>
              <td>{item.B}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default RandomList;
