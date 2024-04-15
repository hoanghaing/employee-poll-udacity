import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Question.scss';
const Question = () => {
  const navigate = useNavigate()
  const onClickShowQuestion = () => {
    navigate(`/questions/${6}`)
  }
  return (
    <div className='question'>
      <div className='info'>
        <p className='username'>mtamis</p>
        <p className='time'>4:11:PM|11/23/2021</p>
      </div>
      <div className='action'>
        <button className="btn btn-outline btn-success" onClick={onClickShowQuestion}>Show</button>
      </div>
    </div>
  );
}
export default Question