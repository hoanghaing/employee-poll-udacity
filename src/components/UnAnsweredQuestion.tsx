import React from 'react';
import './UnAnsweredQuestion.scss';
import * as api from '@/api/index';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const UnAnsweredQuestion = ({ option, question_id, handleVoted }) => {
  const navigate = useNavigate();
  const userId = useSelector((state: any) => {
    return state.user.id
  });
  const handleVoting = async () => {
    const payload = {
      authedUser: userId,
      qid: question_id,
      answer: option.value,
    }
    const res = await api._saveQuestionAnswer(payload);
    if (res) {
      handleVoted(question_id);
    }
  }
  return (
    <div className='unanswer-question'>
      <div className='question-text'>
        { option.text }
      </div>
      <div className='action'>
        <button className="btn btn-outline btn-success" onClick={handleVoting}>Vote</button>
      </div>
    </div>
  );
}
export default UnAnsweredQuestion;
