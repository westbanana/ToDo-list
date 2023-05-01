import React, { useRef, useState } from 'react';

import style from './style.module.scss';

import { ReactComponent as Xmark } from '../../assets/xmark.svg';
import { ReactComponent as Info } from '../../assets/info.svg';
import { ReactComponent as Accept } from '../../assets/accept.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import CheckBox from '../CheckBox';
import Hint from '../Hint';

const ToDo = ({ e, toDoList, setToDoList }) => {
  const [isActive, setIsActive] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [inputTodoName, setInputTodoName] = useState(e.name);
  const refToDo = useRef(null);
  const deleteToDo = () => {
    const arr = toDoList.filter(todo => todo.id !== e.id);
    refToDo.current.classList.add(`${style.removeTodo}`);
    setTimeout(() => {
      setToDoList(arr);
    }, 300);
  };
  const changeInputName = (input) => {
    setInputTodoName(input.target.value);
  };
  const changeTodoName = () => {
    setToDoList(prev => prev.map((todo) => {
      if (
        todo.id === e.id
        && inputTodoName.length
        && !e.isActive
      ) {
        return ({ ...todo, name: inputTodoName });
      }
      return todo;
    }));
    setInputTodoName('');
    setEditClicked(false);
  };
  const openEditTodo = () => {
    if (!e.isActive) setEditClicked(true);
  };

  const closeEditTodo = () => {
    setInputTodoName(e.name);
    setEditClicked(false);
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
      {editClicked && (
        <div
          className={style.test}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(47,47,47)',
            backdropFilter: 'blur(5px)',
            zIndex: 99999999,
            left: 0,
            top: 0,
            position: 'absolute',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            gap: 'calc(50% - 26px)',
            padding: '10px 40px',
          }}
        >
          <input
            type="text"
            autoFocus
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'center',
            }}
            onChange={changeInputName}
            value={inputTodoName}
            // placeholder={e.name}
          />
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
              gap: '20px',
            }}
          >
            <Accept
              onClick={changeTodoName}
              className={style.accept}
            />
            <Xmark
              className={style.xMark}
              onClick={closeEditTodo}
            />
          </div>
        </div>
      )}
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
          onClick={openEditTodo}
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
