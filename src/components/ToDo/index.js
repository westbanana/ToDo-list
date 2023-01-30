import React, { useRef, useState } from 'react';

import style from './style.module.scss';

import { ReactComponent as Xmark } from '../../assets/xmark.svg';
import CheckBox from '../CheckBox';

const ToDo = ({ e, toDoList, setToDoList }) => {
  const [isActive, setIsActive] = useState(false);
  const refToDo = useRef(null);
  const deleteToDo = () => {
    const arr = toDoList.filter(todo => todo.id !== e.id);
    refToDo.current.classList.add(`${style.removeTodo}`);
    setTimeout(() => {
      setToDoList(arr);
    }, 300);
  };
  return (
    <div
      ref={refToDo}
      role="presentation"
      className={e.isActive ? style.done : style.toDo}
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
