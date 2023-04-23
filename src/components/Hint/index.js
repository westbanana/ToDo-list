import React, { useRef, useState } from 'react';

import styles from './styles.module.scss';

const Hint = ({
  children,
  data,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const childRef = useRef();
  const refTooltip = useRef();
  const setHintPosition = () => ({
    left: 30,
    top: -100,
  });
  const showHint = () => {
    setIsVisible(true);
  };
  const hideHint = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={styles.mainBlock}
      onMouseEnter={showHint}
      onMouseLeave={hideHint}
    >
      {React.cloneElement(children, { ref: childRef })}
      {isVisible && (
        <div
          ref={refTooltip}
          className={styles.tooltipBlock}
          style={setHintPosition()}
        >
          <table>
            <thead />
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Id:</td>
                <td>{data.id}</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>{data.time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Hint;
