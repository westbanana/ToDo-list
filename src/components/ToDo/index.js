import React, { useState } from 'react';

import style from './style.module.scss';

import { ReactComponent as Xmark } from '../../assets/xmark.svg';
import CheckBox from '../CheckBox';

const ToDo = ({ e, toDoList, setToDoList }) => {
  const [isActive, setIsActive] = useState(false);
  const deleteToDo = () => {
    setToDoList(toDoList.filter(todo => todo.id !== e.id));
  };
  return (
    <div
      className={`${style.toDo} ${isActive ? style.done : ''}`}
    >
      <CheckBox setIsActive={setIsActive} isActive={isActive} />
      <div className={`${isActive ? style.toDoDone : style.toDoTittle}`}>
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
