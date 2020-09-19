import React, { Fragment } from 'react';

import classnames from 'classnames';
import classes from './SMKModal.module.scss';

interface SMKModalProps {
  isOpen: boolean;
  backdropClickHandler?: () => void;
  darkMode?: boolean;
}

const SMKModal: React.FC<SMKModalProps> = ({ isOpen, ...props }) => {
  return (
    <Fragment>
      <div
        onClick={props.backdropClickHandler}
        className={classnames(classes.backdrop, {
          [`${classes.open}`]: isOpen,
        })}
      ></div>
      <div
        className={classnames(
          classes.container,
          { [`${classes.open}`]: isOpen },
          { [`${classes.darkmode}`]: props.darkMode }
        )}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default SMKModal;
