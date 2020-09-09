import React from 'react';

import classes from './SMKAccordion.module.css';

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
  const toggleItemHandler = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    index: number
  ) => {
    onClickHandler(index);
  };

  return (
    <div className={classes.SMKAccordionContainer}>
      {items.map((item, index) => (
        <div className={classes.SMKAccordionItem} key={item.title}>
          <div
            className={classes.header}
            onClick={(event) => toggleItemHandler(event, index)}
          >
            <h4>{item.title}</h4>
            <p
              className={
                item.isExpanded
                  ? [classes.actionIcon, classes.isExpanded].join(' ')
                  : classes.actionIcon
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
