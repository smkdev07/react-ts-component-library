import React from 'react';

import classes from './SMKAccordion.module.scss';

export interface AccordionItem {
  title: string;
  content: string;
  isExpanded: boolean;
}

interface SMKAccordionProps {
  items: AccordionItem[];
  onClickHandler: (index: number) => void;
}

const SMKAccordion: React.FC<SMKAccordionProps> = ({
  items,
  onClickHandler,
}) => {
  return (
    <div className={classes.container}>
      {items.map((item, index) => (
        <div className={classes.item} key={item.title}>
          <div
            className={classes.header}
            onClick={() => onClickHandler(index)}
          >
            <h4>{item.title}</h4>
            <p
              className={
                item.isExpanded
                  ? [classes.icon, classes.expanded].join(' ')
                  : classes.icon
              }
            >
              ^
            </p>
          </div>
          {item.isExpanded ? (
            <div className={classes.content}>
              <p>{item.content}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SMKAccordion;
