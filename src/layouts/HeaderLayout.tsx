import React from 'react';

const HeaderLayout = ({ children }) => {
  return (
    <div>
      <header>
        <div role="tablist" className="tabs">
          <a role="tab" className="tab" href='/home'>Home</a>
          <a role="tab" className="tab" href='/leaderboard'>Leaderboard</a>
          <a role="tab" className="tab" href='/new'>New</a>
        </div>
      </header>
      {children}
    </div>
  );
};

export default HeaderLayout;