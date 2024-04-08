import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Panel from '@/components/Panel';
import './DashBoard.scss';
const DashBoard = () => {
  return (
    <div className="container">
      <Panel />
    </div>
  );
}
export default DashBoard