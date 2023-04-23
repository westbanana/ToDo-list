import React, { useRef, useState } from 'react';

import style from './style.module.scss';

import { ReactComponent as Xmark } from '../../assets/xmark.svg';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import CheckBox from '../CheckBox';
import Hint from '../Hint';

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

  // const changeTodoName = (element) => {
  //   const text = element.target.innerHTML;
  //   console.log(text);
  //   setToDoList(prev => (
  //     prev.map((todo) => {
  //       if (e.id === todo.id) {
  //         return {
  //           ...todo,
  //           name: text,
  //         };
  //       }
  //       return todo;
  //     })
  //   ));
  // };

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
        <span>
          {e.name}
        </span>
      </div>
      <div className={`${style.toDoTime} ${e.time ? style.throughTime : ''}`}>
        <span>{e.time}</span>
      </div>
      <div className={style.todoSettingsBlock}>
        <div className={style.info}>
          <Hint data={e}>
            <Info />
          </Hint>
        </div>
        <Edit
          className={style.edit}
        />
        <Xmark
          className={style.xMark}
          role="presentation"
          onClick={deleteToDo}
        />
      </div>
    </div>
  );
};

export default ToDo;
