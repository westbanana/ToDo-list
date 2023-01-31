import React from 'react';

import style from './style.module.scss';

const CreateToDo = ({ inputToDoName, setInputToDoName, toDoList }) => {
  const data = new Date();
  const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const createToDo = () => {
    if (inputToDoName) {
      const todo = {
        name: inputToDoName,
        time: `${data.getDate()}/${monthShortNames[data.getMonth()]}/${data.getFullYear()}/${data.getHours()}:${data.getMinutes() >= 10
          ? data.getMinutes()
          : `0${data.getMinutes()}`}`,
        id: (new Date().getTime()),
        description: '',
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
          placeholder="Write what to do"
          value={inputToDoName}
          required
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
    </div>
  );
};

export default CreateToDo;
