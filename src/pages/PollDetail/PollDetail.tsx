import React, { useState } from 'react';
import './PollDetail.scss';
const PollDetail = () => {
  const [author, setAuthor] = useState([]);
  const [options, setOption] = useState([]);

  return (<div className='poll-container'>
    <div className='poll-author'>
      Poll by {author}
    </div>
    <div className='poll-avatar'>
      <img className='avt' src='../src/assets/avatar/hainh.jpg' />
    </div>
    <div className='poll-content'>
      <div className='poll-content-unanswer'>
        <div className='poll-content--title'>
          Would you rather
        </div>
        <div className='poll-content--options'>

        </div>
      </div>
      <div className='poll-content-answered'>

      </div>
    </div>
  </div>)
}
export default PollDetail