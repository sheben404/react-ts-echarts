import React from 'react';

export const Table1 = () => {
  return (
    <div className="table1">
      <h2>表格一</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>海淀区</th><th>朝阳区</th><th>东城区</th><th>西城区</th>
          <th>大兴区</th><th>顺义区</th><th>通州区</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2015</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        <tr>
          <td>2016</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        <tr>
          <td>2017</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};
