import React, { useEffect, useState } from 'react';
import './UnAnsweredQuestion.scss';
const UnAnsweredQuestion = ({ option }) => {
  return (
    <div className='unanswer-question'>
      <div className='question-text'>
        { option.text }
      </div>
      <div className='action'>
        <button className="btn btn-outline btn-success" onClick={() => {}}>Vote</button>
      </div>
    </div>
  );
}
export default UnAnsweredQuestion;
