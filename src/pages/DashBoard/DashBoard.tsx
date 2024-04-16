import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Panel from '@/components/Panel';
import * as api from '@/api/index';
import './DashBoard.scss';
const DashBoard = () => {
  const [doneQues, setDoneQues] = useState([]);
  const [newQues, setNewQues] = useState([])
  useEffect(() => {
    const { doneQuestions = [], newQuestions = [] } = api.getQuestionLists('hainh');
    setDoneQues(doneQuestions)
    setNewQues(newQuestions)
  }, [])
  return (
    <div className="container">
      <Panel title="New Questions" questions={doneQues} />
      <Panel title="Done" questions={newQues} />
    </div>
  );
}
export default DashBoard