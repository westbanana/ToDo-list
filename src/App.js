import React, { useState } from 'react';

import style from './style.module.scss';
import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';

const App = () => {
  const [toDoList, setToDoList] = useState(localStorage.getItem('ToDos') ? JSON.parse(localStorage.getItem('ToDos')) : []);
  const [inputToDoName, setInputToDoName] = useState('');
  // DAy JS /DATE FNS
  return (
    <div
      className={style.main}
    >
      <header>
        <span>ToDo list</span>
      </header>
      <body
        className={style.authorized}
      >
        <div className={style.todoBlock}>
          <div className={style.createToDoBLock}>
            <CreateToDo
              inputToDoName={inputToDoName}
              setInputToDoName={setInputToDoName}
              toDoList={toDoList}
            />
          </div>
          <div className={style.toDoList}>
            {toDoList.map(e => (
              <ToDo
                e={e}
                toDoList={toDoList}
                setToDoList={setToDoList}
              />
            ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default App;
