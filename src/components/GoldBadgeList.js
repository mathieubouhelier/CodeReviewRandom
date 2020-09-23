import React from 'react';
import badgeList from '../data/badgeList.json';

function GoldRandomList() {
  return (
    <div>
      <h1>Lista de badges de ouro</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th> Nome</th>
          </tr>
          {/* {badgeList.filter(item => item.Percentage >= 80).map((item) => { */}
          {badgeList.map((item) => (
            <tr>
              <td>{item.Name}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default GoldRandomList;
