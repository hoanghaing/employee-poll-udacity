import React, { useState } from 'react';
import './Login.scss';
import * as api from '@/api/index';
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/stores/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitUser = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const { usernameInput, passwordInput } = form.elements;
    const payload = {
      id: usernameInput.value,
      password: passwordInput.value
    }
    const result = api.validateUser(payload);
    if (result.success) {
      const { user } = result
      dispatch(setUser(user))
      localStorage.setItem("authenticated", payload.id);
      return navigate("/");
    } else {
      dispatch(clearUser())
      return;
    }
  };
  return (<div className="container flex flex-col gap-[12px]">
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Trusted by Udacity, best software for creating poll. Free for all user until 10 poll</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={onSubmitUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" id="usernameInput" placeholder="username" className="input input-bordered" required onChange={onChangeUsername} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" id="passwordInput" placeholder="password" className="input input-bordered" required onChange={onChangePassword}/>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>)
}
export default Login