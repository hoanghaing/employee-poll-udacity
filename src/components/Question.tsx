import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Question.scss';
const Question = ({username, time, question_id}) => {
  const navigate = useNavigate();
  const onClickShowQuestion = () => {
    navigate(`/questions/${question_id}`)
  }
  return (
    <div className='question'>
      <div className='info'>
        <p className='username'>{username}</p>
        <p className='time'>{time}</p>
      </div>
      <div className='action'>
        <button className="btn btn-outline btn-success" onClick={onClickShowQuestion}>Show</button>
      </div>
    </div>
  );
}
export default Question