import { useState } from 'react';
import { registerUser } from '../../api/user-api';
import './Register.css';

export default function Register() {
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    registerUser(state);
    setState({
      username: '',
      password: '',
      email: '',
      firstName: '',
    });
  }

  function onUsernameChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      username: target.value,
    }));
  }

  function onPasswordChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      password: target.value,
    }));
  }

  function onEmailChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      email: target.value,
    }));
  }

  function onFirstNameChange({ target }) {
    setState((prevState) => ({
      ...prevState,
      firstName: target.value,
    }));
  }

  return (
    <div className="register">
      <div className="register-content">
        <div className="register-header">
          <h4>Register</h4>
        </div>
        <div className="register-body">
          <form className="register-form" onSubmit={handleSubmit}>
            <label className="register-input-label">Username</label>
            <input
              className="register-input"
              type="text"
              value={state.username}
              onChange={onUsernameChange}
            ></input>
            <label className="register-input-label">password</label>
            <input
              className="register-input"
              type="text"
              value={state.password}
              onChange={onPasswordChange}
            ></input>
            <label className="register-input-label">Email address</label>
            <input
              className="register-input"
              type="text"
              value={state.email}
              onChange={onEmailChange}
            ></input>
            <label className="register-input-label">First Name</label>
            <input
              className="register-input"
              type="text"
              value={state.firstName}
              onChange={onFirstNameChange}
            ></input>
            <button className="register-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}