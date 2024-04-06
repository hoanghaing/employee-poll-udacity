import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [authenticated, setauthenticated] = useState("");
  useEffect(() => {
    const loggedUser = localStorage.getItem("authenticated");
    if (loggedUser) {
      setauthenticated(loggedUser);
    }
  }, []);
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (<>
      This is home page!
    </>)
  }
}
export default Home