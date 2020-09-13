import React from 'react';

import classnames from 'classnames';
import classes from './SMKAccordion.module.scss';

export interface AccordionItem {
  title: string;
  content: string;
  isExpanded: boolean;
}

interface SMKAccordionProps {
  items: AccordionItem[];
  darkMode?: boolean;
  onClickHandler: (index: number) => void;
}

const SMKAccordion: React.FC<SMKAccordionProps> = ({
  items,
  onClickHandler,
  ...props
}) => {
  return (
    <div
      className={classnames(classes.container, {
        [`${classes.darkmode}`]: props.darkMode,
      })}
    >
      {items.map((item, index) => (
        <div className={classes.item} key={item.title}>
          <div className={classes.header} onClick={() => onClickHandler(index)}>
            <h4>{item.title}</h4>
            <p
              className={classnames(
                classes.icon,
                {
                  [`${classes.expanded}`]: item.isExpanded,
                },
                { [`${classes.darkmode}`]: props.darkMode }
              )}
            >
              ^
            </p>
          </div>
          {item.isExpanded ? (
            <div className={classes.content}>
              <p
                className={classnames({
                  [`${classes.darkmode}`]: props.darkMode,
                })}
              >
                {item.content}
              </p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SMKAccordion;
