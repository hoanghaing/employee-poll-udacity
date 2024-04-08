import React, { useEffect, useState } from 'react';
import './Question.scss';
const Question = () => {
  return (
    <div className='question'>
      <div className='info'>
        <p className='username'>mtamis</p>
        <p className='time'>4:11:PM|11/23/2021</p>
      </div>
      <div className='action'>
        <button className="btn btn-outline btn-success">Success</button>
      </div>
    </div>
  );
}
export default Question