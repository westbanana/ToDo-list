import React, { useEffect, useState } from 'react';

import style from './style.module.scss';

const Background = () => {
  const blick = Array(1).fill(null);
  const [x, changeX] = useState(0);
  const [y, changeY] = useState(0);

  useEffect(() => {
    setInterval(() => {
      changeX(Math.floor(Math.random() * window.innerWidth) + 1);
      changeY(Math.floor(Math.random() * window.innerHeight) + 1);
    }, 1111);
  }, []);
  return (
    <div className={style.main}>
      {blick.map((e, index) => (
        <div
          /* eslint-disable-next-line react/no-array-index-key */
          key={index + e}
          className={style.blick}
          style={{
            left: x,
            top: y,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
