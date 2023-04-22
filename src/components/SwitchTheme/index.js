import React, { useState } from 'react';

import styles from './style.module.scss';

const SwitchTheme = () => {
  const [light, setLight] = useState(false);
  const swipeTheme = () => {
    if (light) {
      return {
        left: '0%',
      };
    }
    return {
      left: 'calc(100% - 20px)',
    };
  };
  return (
    <div
      onClick={() => setLight(prev => !prev)}
      role="presentation"
      className={styles.mainBlock}
    >
      <div
        className={styles.circle}
        style={swipeTheme()}
      />
    </div>
  );
};

export default SwitchTheme;
