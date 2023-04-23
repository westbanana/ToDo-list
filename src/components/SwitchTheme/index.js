import React from 'react';

import styles from './style.module.scss';

const SwitchTheme = () => {
  console.log('switch');
  return (
    <div
      className={styles.mainBlock}
    >
      <div
        className={styles.circle}
      />
    </div>
  );
};

export default SwitchTheme;
