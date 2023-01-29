import React, { useEffect, useState } from 'react';

import style from './style.module.scss';
import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import Background from './components/Background';

const App = () => {
  const [toDoList, setToDoList] = useState(localStorage.getItem('ToDos') ? JSON.parse(localStorage.getItem('ToDos')) : []);
  const [inputToDoName, setInputToDoName] = useState('');
  // DAy JS /DATE FNS
  useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(toDoList));
  }, [toDoList]);
  return (
    <div
      className={style.main}
    >
      <Background />
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
                key={e.id}
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
