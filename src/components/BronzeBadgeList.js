import React from 'react';
import badgeList from '../data/badgeList.json';

function BronzeRandomList() {
  return (
    <div>
      <h1>Lista de badges de bronze</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th> Nome</th>
          </tr>
          {badgeList
            .filter((item) => item.Percentage >= 20)
            .map((item) => (
              <tr>
                <td>{item.Name}</td>
              </tr>
            ))}
        </thead>
      </table>
    </div>
  );
}

export default BronzeRandomList;
