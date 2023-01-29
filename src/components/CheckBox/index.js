import React, { useRef } from 'react';

import style from './style.module.scss';

import { ReactComponent as Check } from '../../assets/check.svg';

const CheckBox = ({ isActive, setIsActive }) => {
  const refCheckBox = useRef(null);
  return (
    <div
      role="presentation"
      onClick={() => setIsActive(!isActive)}
      className={style.box}
    >
      {isActive && (<Check ref={refCheckBox} className={style.check} />)}
    </div>
  );
};

export default CheckBox;
