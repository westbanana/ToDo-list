import React from 'react';

import style from './style.module.scss';

import Data from '../GetData';

const CreateToDo = ({ inputToDoName, setInputToDoName, toDoList }) => {
  const createToDo = () => {
    if (inputToDoName) {
      const todo = {
        name: inputToDoName,
        time: Data,
        id: (new Date().getTime()),
        description: '',
        isActive: false,
      };
      toDoList.push(todo);
      localStorage.setItem('ToDos', JSON.stringify(toDoList));
      setInputToDoName('');
    }
  };

  return (
    <div className={style.main}>
      <form action="#">
        <input
          type="text"
          placeholder="Write what to do"
          value={inputToDoName}
          required
          onChange={e => setInputToDoName(e.target.value)}
        />
        <button
          onClick={createToDo}
          type="submit"
        >
          Create
        </button>
        <span>{`TODOs: ${toDoList.length}`}</span>
      </form>
    </div>
  );
};

export default CreateToDo;
