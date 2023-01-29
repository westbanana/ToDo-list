import React from 'react';

import style from './style.module.scss';

import { ReactComponent as Check } from '../../assets/check.svg';

const CheckBox = ({
  isActive, setIsActive, toDoList, e, setTodoList,
}) => {
  const newToDoList = () => {
    const arr = [];
    toDoList.forEach((element) => {
      if (element.id === e.id) {
        element.isActive = !isActive;
        arr.push(element);
      } else {
        arr.push(element);
      }
    });
    return arr;
  };
  const checkTodo = () => {
    setIsActive(!isActive);
    setTodoList(newToDoList());
    localStorage.setItem('ToDos', JSON.stringify(toDoList));
  };
  return (
    <div
      role="presentation"
      onClick={checkTodo}
      className={style.box}
    >
      {e.isActive && (<Check className={style.check} />)}
    </div>
  );
};

export default CheckBox;
