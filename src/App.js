import React, { useEffect, useRef, useState } from 'react';

import style from './style.module.scss';
import CreateToDo from './components/CreateToDo';
import ToDo from './components/ToDo';
import Background from './components/Background';
// import Settings from './components/Settings';
import { ReactComponent as Arrow } from './assets/arrow.svg';

const App = () => {
  const [toDoList, setToDoList] = useState(localStorage.getItem('ToDos') ? JSON.parse(localStorage.getItem('ToDos')) : []);
  const [inputToDoName, setInputToDoName] = useState('');
  const refHeader = useRef(null);
  // DAy JS /DATE FNS
  useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(toDoList));
  }, [toDoList]);

  const executeScroll = () => refHeader.current.scrollIntoView();

  return (
    <div
      className={style.main}
    >
      <Arrow
        className={style.arrow}
        role="presentation"
        onClick={executeScroll}
      />
      <Background />
      <header ref={refHeader}>
        <span>ToDo list</span>
      </header>
      { /* <Settings
        onClick={() => console.log('click')}
      /> */ }
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
