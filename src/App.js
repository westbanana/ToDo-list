import React, { useState } from 'react';

import style from './style.module.scss';

const App = () => {
  const [userData, setUserData] = useState({
    name: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    todosCount: localStorage.getItem('todosCount') ? localStorage.getItem('todosCount') : 0,
  });
  const [inputUserName, setInputUserName] = useState('');
  const createUser = () => {
    if (inputUserName) {
      let userNameFirstLetterUpperCase = inputUserName;
      inputUserName.split('').forEach((e, i) => {
        if (i === 0 || inputUserName[i - 1] === ' ') {
          userNameFirstLetterUpperCase = userNameFirstLetterUpperCase.substring(0, i) + e.toUpperCase()
          + userNameFirstLetterUpperCase.substring(i + 1);
        }
      });
      setUserData({
        name: userNameFirstLetterUpperCase,
        todosCount: userData.todosCount,
      });
      localStorage.setItem('userName', userData.name);
    }
  };
  return (
    <div className={style.main}>
      <header>
        <h1>{`${userData.name} ToDo list`}</h1>
      </header>
      <body>
        {userData.name !== ' ' && (
        <div className={style.authorize}>
          <form action="#">
            <input
              type="text"
              placeholder="Set username"
              value={inputUserName}
              required
              onChange={e => setInputUserName(e.target.value)}
            />
            <button
              onClick={createUser}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        )}
      </body>
    </div>
  );
};

export default App;
