import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import styles from './style.module.scss';

import SwitchTheme from '../SwitchTheme';
import { ReactComponent as Gear } from '../../assets/settings.svg';
import { ReactComponent as XMark } from '../../assets/xmark.svg';

const Settings = () => {
  const [isOpened, setIsOpened] = useState(false);
  const settingsBlockRef = useRef();
  const openSettings = () => {
    setIsOpened(true);
  };
  const closeSettings = () => {
    setIsOpened(false);
  };
  useClickAway(settingsBlockRef, () => {
    setIsOpened(false);
  });

  return (
    <div
      ref={settingsBlockRef}
      className={styles.mainBlock}
    >
      {!isOpened
        ? (
          <Gear
            className={styles.gear}
            onClick={openSettings}
          />
        )
        : (
          <div className={styles.backgroundSettings}>
            <div
              className={styles.openedSettings}
            >
              <div className={styles.xmarkBlock}>
                <XMark
                  onClick={closeSettings}
                  className={styles.xmark}
                />
              </div>
              <h1
                role="presentation"
              >
                Settings
              </h1>
              <div>
                <span>Swipe Theme:</span>
                <SwitchTheme />
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Settings;
