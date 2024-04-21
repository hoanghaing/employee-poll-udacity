import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PollDetail.scss';
import * as api from '@/api/index';
import AnsweredQuestion from '@/components/AnsweredQuestion';
import UnAnsweredQuestion from '@/components/UnAnsweredQuestion';
const PollDetail = () => {
  const navigate = useNavigate();
  const { question_id } = useParams();
  const [author, setAuthor] = useState([]);
  const [options, setOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const userId = useSelector((state: any) => {
    return state.user.id
  });
  useEffect(() => {
    try {
      const result = api.getQuestionDetail(question_id, userId);
      const { answered, author, options } = result;
      setAuthor(author);
      setIsAnswered(answered);
      setOptions(options);
    } catch (err) {
      navigate('/notfound');
    }
  }, [question_id]);
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
        {
          isAnswered ?
            (
              <div className='poll-content-answered'>
                {options.map((item, index) => (
                  <AnsweredQuestion key={index} option={item} question_id={question_id}/>
                ))}
              </div>
            ) :
            (
              <div className='poll-content--options'>
                {options.map((item, index) => (
                  <UnAnsweredQuestion key={index} option={item} question_id={question_id} />
                ))}
              </div>
            )
        }

      </div>

    </div>
  </div>)
}
export default PollDetail