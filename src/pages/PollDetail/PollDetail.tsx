import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PollDetail.scss';
import * as api from '@/api/index';
const PollDetail = () => {
  const { question_id } = useParams();
  const [author, setAuthor] = useState([]);
  const [options, setOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const userId = useSelector((state: any) => {
    return state.user.id
  });
  useEffect(() => {
    const result = api.getQuestionDetail(question_id, userId);
    const { answered, author, options } = result;
    setAuthor(author);
    setIsAnswered(answered)
  },[])
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