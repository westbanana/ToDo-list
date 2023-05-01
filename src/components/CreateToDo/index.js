import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import style from './style.module.scss';

import getData from '../Helpers/GetData';

// import Hint from '../Hint';

const CreateToDo = ({ inputToDoName, setInputToDoName, toDoList }) => {
  const [emptyClickCount, setEmptyClickCount] = useState(0);
  const stopRef = useRef();
  const createToDo = (e) => {
    e.stopPropagation();
    if (inputToDoName.length) {
      const todo = {
        name: inputToDoName,
        time: getData(),
        id: (new Date().getTime()),
        isActive: false,
      };
      toDoList.unshift(todo);
      localStorage.setItem('ToDos', JSON.stringify(toDoList));
      setInputToDoName('');
    } else {
      setEmptyClickCount(prev => prev + 1);
    }
  };
  useEffect(() => {
    if (emptyClickCount % 10 === 0 && emptyClickCount >= 10) {
      stopRef.current.classList.remove(style.stopSpanHide);
      stopRef.current.classList.add(style.stopSpanShow);
      setTimeout(() => {
        stopRef.current.classList.remove(style.stopSpanShow);
        stopRef.current.classList.add(style.stopSpanHide);
      }, 3000);
    }
  }, [emptyClickCount]);
  const onChangeHandler = useCallback((e) => {
    setInputToDoName(e.target.value);
  }, [inputToDoName]);
  return (
    <div className={style.main}>
      <span
        ref={stopRef}
        className={style.stopSpanHide}
      >
        АСТАНАВИТЕСЬ
      </span>
      <form action="#">
        <input
          type="text"
          maxLength={300}
          placeholder="Write what to do"
          value={inputToDoName}
          onChange={e => onChangeHandler(e)}
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
