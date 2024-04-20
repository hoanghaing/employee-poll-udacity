import React from 'react';
import './HeaderLayout.scss';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '@/stores/user';

const HeaderLayout = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => {
    return state.user
  });
  const navigate = useNavigate();
  const onClickLogout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("cachedUser");
    dispatch(clearUser())
    return navigate("/login");
  }
  return (
    <div>
      <header>
        <div role="tablist" className="tabs">
          <span
            role="tab"
            className={window.location.href.includes('/home') ? 'tab active' : 'tab'}
          >
            <Link to="/home">Home</Link>
          </span>
          <span
            role="tab"
            className={window.location.href.includes('/leaderboard') ? 'tab active' : 'tab'}
          >
            <Link to="/leaderboard">Leaderboard</Link>
          </span>
          <span
            role="tab"
            className={window.location.href.includes('/new') ? 'tab active' : 'tab'}
          >
            <Link to="/new">New</Link>
          </span>
          <div className='log-out' onClick={onClickLogout}>
            Logout
          </div>
          <div className='user'>
            <img className='avt' src={`../src/${currentUser.avatarURL}`} />
            <span className='name'>{currentUser.name}</span>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default HeaderLayout;