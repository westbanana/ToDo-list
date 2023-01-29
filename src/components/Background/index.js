import React from 'react';

import style from './style.module.scss';

const Background = () => {
  const blick = Array(10).fill(null);

  return (
    <div className={style.main}>
      {blick.map(() => (
        <div
          className={style.blick}
          style={{
            left: Math.floor(Math.random() * window.innerWidth) + 1,
            top: Math.floor(Math.random() * window.innerHeight) + 1,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
