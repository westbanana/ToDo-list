import React from 'react';

import style from './style.module.scss';

// import Hint from '../Hint';

const CreateToDo = ({ inputToDoName, setInputToDoName, toDoList }) => {
  const data = new Date();
  const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  // const [hintIsShowed, setHintIsShowed] = useState(false);
  const createToDo = () => {
    if (inputToDoName.length) {
      const todo = {
        name: inputToDoName,
        time: `${data.getDate()}/${monthShortNames[data.getMonth()]}/${data.getFullYear()}/${data.getHours()}:${data.getMinutes() >= 10
          ? data.getMinutes()
          : `0${data.getMinutes()}`}`,
        id: (new Date().getTime()),
        isActive: false,
      };
      toDoList.push(todo);
      localStorage.setItem('ToDos', JSON.stringify(toDoList));
      setInputToDoName('');
    }
  };

  // const CloseHint = () => setHintIsShowed(false);
  return (
    <div className={style.main}>
      <form action="#">
        <input
          type="text"
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
