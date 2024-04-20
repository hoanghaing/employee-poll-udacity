import React, { useEffect, useState } from 'react';
import './AnsweredQuestion.scss';
const AnsweredQuestion = ({ option }) => {
  return (
    <div className={`answer-question ${option.isVotedByYou ? 'selected' : ''}`}>
      <div className={`info ${option.isVotedByYou ? 'selected' : ''}`}>
        {option.text}
      </div>
      <div className='stats'>
        <div>
          {`${option.votes} votes | ${(option.percentage).toFixed(1)}%`}
        </div>
      </div>
    </div>
  );
}
export default AnsweredQuestion