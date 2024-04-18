import React, { useEffect, useState } from 'react';
import './Leaderboard.scss';
import * as api from '@/api/index';

const Leaderboard = () => {
  const [rankings, setRanking] = useState([]);
  const itemsComponent: JSX.Element[] = [];
  useEffect(() => {
    const result = api._getRanking();
    setRanking(result);
  }, []);
  for (const user of rankings) {
    itemsComponent.push(
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={`../src/${user.avatarURL}`} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{`${user.name}`}</div>
              <div className="text-sm opacity-50">{`${user.id}`}</div>
            </div>
          </div>
        </td>
        <td>
          {user.answered}
        </td>
        <td>
          {user.created}
        </td>
      </tr>
    );
  }
  return (<div className="ranking-table overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {itemsComponent}
      </tbody>
    </table>
  </div>)
}
export default Leaderboard