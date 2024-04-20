import React, { useEffect, useState } from 'react';
import './AnsweredQuestion.scss';
const AnsweredQuestion = ({}) => {
  return (
    <div className='question'>
      <div className='info'>
        <p className='username'></p>
        <p className='time'></p>
      </div>
      <div className='action'>
        <button className="btn btn-outline btn-success" onClick={() => {}}></button>
      </div>
    </div>
  );
}
export default AnsweredQuestion