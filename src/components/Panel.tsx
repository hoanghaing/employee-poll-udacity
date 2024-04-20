import React, { useEffect, useState } from 'react';
import Question from './Question';
import './Panel.scss'
const Panel = ({ title, questions }) => {
  const questionComponents: JSX.Element[] = [];
  for (const question of questions) {
    questionComponents.push(
      <Question
        username={question.author}
        time={question.timestamp}
        question_id={question.id}
        key={question.id}
      />
    );
  }
  return (
    <div className='panel'>
      <div className='panel-header'>
        <p>{title}</p>
      </div>
      <div className='panel-body'>
        {
          questionComponents.length > 0 ? (
            <>{questionComponents}</>) : (<><div className='text-center'>No question</div></>)
        }
      </div>
    </div>
  );
}
export default Panel