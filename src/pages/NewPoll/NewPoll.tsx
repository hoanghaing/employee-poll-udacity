import React, { useState } from 'react';
import './NewPoll.scss';
import * as api from '@/api/index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NewPoll = () => {
  const navigate = useNavigate();
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const authorId = useSelector((state: any) => {
    return state.user.name
  });
  const onSubmitQuestion = async () => {
    const payload = {
      optionOneText: option1,
      optionTwoText: option2,
      author: authorId
    }
    const result = await api._saveQuestion(payload);
    if (result.timestamp) navigate('/home');
  }
  const onChangeOption1 = (event) => {
    setOption1(event.target.value)
  }
  const onChangeOption2 = (event) => {
    setOption2(event.target.value)
  }
  return (<div className='new'>
    <div className='title'>Would You Rather</div>
    <div className='description'>Create Your Own Poll</div>
      <div className='options'>
        <label htmlFor="option1">
          <b>First Option</b>
        </label>
        <input type="text" placeholder='Option One' name="option1"
          onChange={onChangeOption1}
          className='input input-bordered w-full max-w-option'></input>
        <label htmlFor="option2">
          <b>Second Option</b>
        </label>
        <input type="text" placeholder='Option Two' name="option2"
          onChange={onChangeOption2}
          className='input input-bordered w-full max-w-option'></input>
      </div>
      <div className='submit'>
        <button className='btn' onClick={onSubmitQuestion}>Submit</button>
      </div>
  </div>)
}
export default NewPoll