import React from 'react';

import style from './style.module.scss';

import { ReactComponent as Check } from '../../assets/check.svg';
import getData from '../Helpers/GetData';

const CheckBox = ({
  isActive, setIsActive, toDoList, e, setTodoList,
}) => {
  const updateData = () => (
    toDoList.map((todo) => {
      if (e.id === todo.id) {
        return {
          ...todo,
          time: getData(),
          isActive: !isActive,
        };
      }
      return todo;
    })
  );

  const checkTodo = () => {
    setIsActive(!isActive);
    setTodoList(updateData());
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
