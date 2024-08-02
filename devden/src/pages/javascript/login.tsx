import React, { useState } from 'react';
import styles from '../../styles/login.module.css';

const Login = () => {
  const initialData = { name: '', email: '', password: '', remember: false };
  const [inputData, setInputData] = useState(initialData);
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  function handleData(e) {
    const { name, value, type, checked } = e.target;
    setInputData({
      ...inputData,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isLogin) {
      // Mock login validation
      if (inputData.email === ' ' && inputData.password === ' ') {
        setMessage('Login successful');
      } else {
        setMessage('Incorrect email or password');
      }
    } else {
      // Mock sign-up logic
      if (inputData.name && inputData.email && inputData.password) {
        setMessage('Sign up successful');
      } else {
        setMessage('Please fill all fields');
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.switchButton} htmlFor="switch">
        <div className={styles.switchOuter}>
          <input
            id="switch"
            type="checkbox"
            onChange={() => {
              setIsLogin(!isLogin);
              setMessage('');
              setInputData(initialData);
            }}
          />
          <div className={styles.button}>
            <span className={styles.buttonToggle}></span>
            <span className={styles.buttonIndicator}></span>
          </div>
        </div>
      </label>
      <div className={styles.cardSwitch}>
        <div className={isLogin ? styles.flipCardFront : styles.flipCardBack}>
          <div className={styles.title}>{isLogin ? 'Log in' : 'Sign up'}</div>
          <form className={styles.flipCardForm} onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                className={styles.flipCardInput}
                placeholder="Name"
                name="name"
                type="text"
                value={inputData.name}
                onChange={handleData}
              />
            )}
            <input
              className={styles.flipCardInput}
              name="email"
              placeholder="Email"
              type="email"
              value={inputData.email}
              onChange={handleData}
            />
            <input
              className={styles.flipCardInput}
              name="password"
              placeholder="Password"
              type="password"
              value={inputData.password}
              onChange={handleData}
            />
            {isLogin && (
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={inputData.remember}
                  onChange={handleData}
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
            )}
            <button className={styles.flipCardBtn} type="submit">
              {isLogin ? `Let's go!` : 'Confirm!'}
            </button>
          </form>
        </div>
      </div>
      {message && <div className={styles.message}>{message}</div>}
    </div>
  );
};

export default Login;
