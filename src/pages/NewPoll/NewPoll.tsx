import React, { useState } from 'react';
import './NewPoll.scss';
const NewPoll = () => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const onSubmitQuestion = () => {
    console.log('onSubmitQuestion');
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