import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Panel from '@/components/Panel';
import * as api from '@/api/index';
import './DashBoard.scss';
const DashBoard = () => {
  const [doneQues, setDoneQues] = useState([]);
  const [newQues, setNewQues] = useState([]);
  const [toggleDone, setToggleDone] = useState(true);
  const userId = useSelector((state: any) => {
    return state.user.id
  });
  useEffect(() => {
    const { doneQuestions = [], newQuestions = [] } = api.getQuestionLists(userId);
    setDoneQues(doneQuestions)
    setNewQues(newQuestions)
  }, []);
  const handleToggleClicked = () => {
    setToggleDone(!toggleDone);
  };
  return (
    <div className="container">
      <input
        type="checkbox"
        className="setting-panel-toggle toggle toggle-success"
        defaultChecked={toggleDone}
        onClick={handleToggleClicked}
      />
      {
        !toggleDone ? 
          <Panel title="New Questions" questions={newQues} /> 
          : <Panel title="Done" questions={doneQues} />
      }
    </div>
  );
}
export default DashBoard