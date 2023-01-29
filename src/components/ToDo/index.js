import React, { useState } from 'react';

import style from './style.module.scss';

import { ReactComponent as Xmark } from '../../assets/xmark.svg';
import CheckBox from '../CheckBox';

const ToDo = ({ e, toDoList, setToDoList }) => {
  const [isActive, setIsActive] = useState(false);
  const deleteToDo = () => {
    const arr = toDoList.filter(todo => todo.id !== e.id);
    setToDoList(arr);
  };
  return (
    <div
      role="presentation"
      className={`${style.toDo} ${e.isActive ? style.done : ''}`}
    >
      <CheckBox
        e={e}
        setTodoList={setToDoList}
        toDoList={toDoList}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <div className={`${e.isActive ? style.toDoDone : style.toDoTittle}`}>
        <span>{e.name}</span>
      </div>
      <div className={style.toDoTime}>
        <span>{e.time}</span>
      </div>
      <Xmark
        className={style.xMark}
        role="presentation"
        onClick={deleteToDo}
      />
    </div>
  );
};

export default ToDo;
