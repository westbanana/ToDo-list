import React from 'react';

import styles from './styles.module.scss';

import { ReactComponent as XMark } from '../../assets/xmark.svg';

const Hint = ({
  tittle,
  description,
  isShowed,
  closeHint,
}) => {
  const onClickHandler = () => {
    closeHint();
  };
  return (
    isShowed && (
      <div
        className={styles.mainBlock}
      >
        <XMark
          className={styles.XMark}
          onClick={onClickHandler}
        />
        <h3>{tittle}</h3>
        <span>{description}</span>
      </div>
    )
  );
};

export default Hint;
