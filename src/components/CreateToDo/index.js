import React from 'react';

import style from './style.module.scss';

import getData from '../Helpers/GetData';

// import Hint from '../Hint';

const CreateToDo = ({ inputToDoName, setInputToDoName, toDoList }) => {
  const createToDo = () => {
    if (inputToDoName.length) {
      const todo = {
        name: inputToDoName,
        time: getData(),
        id: (new Date().getTime()),
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
          maxLength={300}
          placeholder="Write what to do"
          value={inputToDoName}
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
      {/* <Hint
        tittle="Заполните поле ввода"
        description="Чтобы создать TODO введите минимум 1 символ"
        isShowed={hintIsShowed}
        closeHint={CloseHint}
      /> */ }
    </div>
  );
};

export default CreateToDo;
