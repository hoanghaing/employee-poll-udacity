import React from 'react';
import './HeaderLayout.scss';
import { useNavigate } from "react-router-dom";
const HeaderLayout = ({ children }) => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    localStorage.removeItem("authenticated");
    return navigate("/login");
  }
  return (
    <div>
      <header>
        <div role="tablist" className="tabs">
          <a role="tab" className="tab" href='/home'>Home</a>
          <a role="tab" className="tab" href='/leaderboard'>Leaderboard</a>
          <a role="tab" className="tab" href='/new'>New</a>
          <div className='log-out' onClick={onClickLogout}>
            Logout
          </div>
          <div className='user'>
            <img className='avt' src='./src/assets/avatar/mtsamis.jpg'/>
            <span className='name'>Ahihi</span>
          </div>

        </div>
      </header>
      {children}
    </div>
  );
};

export default HeaderLayout;