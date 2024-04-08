import React, { useEffect, useState } from 'react';
import Question from './Question';
import './Panel.scss'
const Panel = () => {
  return (
    <div className='panel'>
      <div className='panel-header'>
        <p>New Questions</p>
      </div>
      <div className='panel-body'>
        <Question></Question>
      </div>
    </div>
  );
}
export default Panel