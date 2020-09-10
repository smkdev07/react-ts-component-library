import React, { useState } from 'react';

import classes from './App.module.scss';

import SMKToolbar from './components/SMKToolbar/SMKToolbar';
import SMKSwitch from './components/SMKSwitch/SMKSwitch';
import SMKCard from './components/SMKCard/SMKCard';
import SMKAccordion from './components/SMKAccordion/SMKAccordion';
import SMKProgressBar from './components/SMKProgressBar/SMKProgressBar';
import SMKButton from './components/SMKButton/SMKButton';

const App: React.FC = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [accordionItems, setAccordionItems] = useState(SAMPLE_ACCORDION_ITEMS);
  const [progressValue, setProgressValue] = useState(25);

  const toggleAccordionItem = (index: number) => {
    setAccordionItems((prevState) => {
      const updatedAccordionItems = [...prevState];
      const updatedAccordionItem = { ...updatedAccordionItems[index] };
      updatedAccordionItem.isExpanded = !updatedAccordionItem.isExpanded;
      updatedAccordionItems[index] = updatedAccordionItem;
      return updatedAccordionItems;
    });
  };

  const updateProgressValue = () => {
    setProgressValue((prevState) => {
      if (prevState === 100) {
        return prevState;
      }
      return prevState + 25;
    });
  };

  return (
    <div className={classes.container}>
      <SMKToolbar title="SMK Component Libary">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span role="img" aria-label="light mode">
                🌞
              </span>
              <SMKSwitch
                id="switch"
                checked={switchValue}
                onChangeHandler={() =>
                  setSwitchValue((prevState) => !prevState)
                }
              />
              <span role="img" aria-label="dark mode">
                🌒
              </span>
            </li>
          </ul>
        </nav>
      </SMKToolbar>
      <main>
        <section className={classes.cards}>
          <div className={classes.card}>
            <SMKCard title="Card" subTitle="Sample 1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              similique molestiae illum repellendus illo et nostrum temporibus
              sit officiis necessitatibus dolore, aliquam ut dignissimos
              deserunt!
            </SMKCard>
          </div>
          <div className={classes.card}>
            <SMKCard title="Card" subTitle="Sample 2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod
              laboriosam quos, adipisci dolor architecto rerum hic, perferendis
              quaerat sequi soluta earum at iure atque!
            </SMKCard>
          </div>
          <div className={classes.card}>
            <SMKCard title="Card" subTitle="Sample 3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              excepturi enim sunt incidunt fugiat, tenetur ex eligendi, quasi,
              iure doloremque eaque! Esse repellendus et quas!
            </SMKCard>
          </div>
        </section>
        <section className={classes.accordion}>
          <SMKAccordion
            items={accordionItems}
            onClickHandler={toggleAccordionItem}
          />
        </section>
        <section className={classes.progressbar}>
          <SMKProgressBar currentValue={progressValue} maxValue={100} />
          <div>
            <SMKButton
              id="update-progress"
              label="Update Progress"
              type="button"
              onClickHandler={updateProgressValue}
            />
          </div>
        </section>
      </main>
      <footer>© SMK 2020. All Rights Reserved.</footer>
    </div>
  );
};

export default App;

const SAMPLE_ACCORDION_ITEMS = [
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reiciendis nobis blanditiis facere, animi rerum natus quidem adipisci quae similique?',
    isExpanded: false,
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reiciendis nobis blanditiis facere, animi rerum natus quidem adipisci quae similique?',
    isExpanded: true,
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reiciendis nobis blanditiis facere, animi rerum natus quidem adipisci quae similique?',
    isExpanded: false,
  },
];
