import React from 'react';
import badgeList from '../data/badgeList.json';

function SilverRandomList() {
  return (
    <div>
      <h1>Lista de badges de prata</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th> Nome</th>
          </tr>
          {badgeList
            .filter((item) => item.Percentage >= 50)
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

export default SilverRandomList;
