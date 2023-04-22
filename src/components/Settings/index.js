import React, { useRef, useState } from 'react';
// import React, { useState } from 'react';

import styles from './style.module.scss';

import SwitchTheme from '../SwitchTheme';
import { ReactComponent as Gear } from '../../assets/settings.svg';

const Settings = () => {
  const [isOpened, setIsOpened] = useState(false);
  const refSettings = useRef(null);
  const openSettings = () => {
    setIsOpened(true);
    refSettings.current.classList.add(styles.closedSetting);
  };
  const closeSettings = () => {
    refSettings.current.classList.remove(styles.closopenedSettingsedSetting);
    refSettings.current.classList.add(styles.closedSetting);
    // setTimeout(() => {
    // setIsOpened(false);
    // }, 1000);
  };
  return (
    <div className={styles.mainBlock}>
      {!isOpened
        ? (
          <Gear
            className={styles.gear}
            onClick={openSettings}
          />
        )
        : (
          <div
            ref={refSettings}
          >
            <h1
              role="presentation"
              onClick={closeSettings}
            >
              Settings
            </h1>
            <SwitchTheme />
          </div>
        )}
    </div>
  );
};

export default Settings;
