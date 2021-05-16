import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

import useFirebase from '../../hooks/useFirebase';
import useNotifications from '../../hooks/useNotifications';

const Popup = () => {
  const { token } = useFirebase();
  const { sendNotification } = useNotifications();
  const onClickHandler = async () => {
    sendNotification(token);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <button onClick={onClickHandler}>Clique</button>
      </header>
    </div>
  );
};

export default Popup;
