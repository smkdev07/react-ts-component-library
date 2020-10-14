import React, { useState } from 'react';

import classnames from 'classnames';
import classes from './App.module.scss';

import SMKToolbar from './components/SMKToolbar/SMKToolbar';
import SMKSwitch from './components/SMKSwitch/SMKSwitch';
import SMKCard from './components/SMKCard/SMKCard';
import SMKAccordion from './components/SMKAccordion/SMKAccordion';
import SMKProgressBar from './components/SMKProgressBar/SMKProgressBar';
import SMKButton from './components/SMKButton/SMKButton';
import SMKLoader from './components/SMKLoader/SMKLoader';
import SMKBadge from './components/SMKBadge/SMKBadge';
import SMKModal from './components/SMKModal/SMKModal';
import SMKInput from './components/SMKInput/SMKInput';

const App: React.FC = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [accordionItems, setAccordionItems] = useState(SAMPLE_ACCORDION_ITEMS);
  const [progressValue, setProgressValue] = useState(25);
  const [showModal, setShowModal] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [telInput, setTelInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [urlInput, setUrlInput] = useState('www.sample.com');

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
    <div
      className={classnames(classes.container, {
        [`${classes.darkmode}`]: switchValue,
      })}
    >
      <SMKToolbar title="SMK Component Libary" darkMode={switchValue}>
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
      <main className={classnames({ [`${classes.darkmode}`]: switchValue })}>
        <section className={classes.cards}>
          <div className={classes.card}>
            <SMKCard title="Card" subTitle="Sample 1" darkMode={switchValue}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              similique molestiae illum repellendus illo et nostrum temporibus
              sit officiis necessitatibus dolore, aliquam ut dignissimos
              deserunt!
            </SMKCard>
          </div>
          <div className={classes.card}>
            <SMKCard title="Card" subTitle="Sample 2" darkMode={switchValue}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod
              laboriosam quos, adipisci dolor architecto rerum hic, perferendis
              quaerat sequi soluta earum at iure atque!
            </SMKCard>
          </div>
          <div className={classes.card}>
            <SMKCard title="Card" subTitle="Sample 3" darkMode={switchValue}>
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
            darkMode={switchValue}
          />
        </section>
        <section className={classes.progressbar}>
          <SMKProgressBar
            currentValue={progressValue}
            maxValue={100}
            darkMode={switchValue}
          />
          <div className={classes.buttons}>
            <SMKButton
              id="update-progress"
              label="Update Progress"
              type="button"
              color="primary"
              darkMode={switchValue}
              onClickHandler={updateProgressValue}
            />
            <SMKButton
              id="reset-progress"
              label="Reset Progress"
              type="button"
              color="secondary"
              darkMode={switchValue}
              onClickHandler={() => setProgressValue(0)}
            />
          </div>
        </section>
        {/* <section>
          <SMKLoader isLoading={true} darkMode={switchValue}/>
        </section> */}
        <section className={classes.badges}>
          <SMKBadge
            type="none"
            shape="sharp"
            label="Badges"
            darkMode={switchValue}
          />
          <SMKBadge
            type="error"
            shape="rounded"
            label="Error"
            clickable
            darkMode={switchValue}
          />
          <SMKBadge
            type="info"
            shape="rounded"
            label="Info"
            clickable
            darkMode={switchValue}
          />
          <SMKBadge
            type="warning"
            shape="rounded"
            label="Warning"
            clickable
            darkMode={switchValue}
          />
          <SMKBadge
            type="success"
            shape="rounded"
            label="Success"
            clickable
            darkMode={switchValue}
          />
        </section>
        <section className={classes.modal}>
          <SMKButton
            id="show-modal"
            label="Show Modal"
            type="button"
            color="secondary"
            darkMode={switchValue}
            onClickHandler={() => setShowModal(true)}
          />
          <SMKModal
            isOpen={showModal}
            backdropClickHandler={() => setShowModal(false)}
            darkMode={switchValue}
          >
            <div className={classes.modalcontent}>
              <h2
                className={classnames({ [`${classes.darkmode}`]: switchValue })}
              >
                Lorem ipsum dolor sit amet.
              </h2>
              <p
                className={classnames({ [`${classes.darkmode}`]: switchValue })}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, tenetur cumque tempore error natus ipsam. Minus
                tempora harum repudiandae possimus.
              </p>
              <div>
                <SMKButton
                  id="close-modal"
                  label="Close"
                  type="button"
                  color="primary"
                  darkMode={switchValue}
                  onClickHandler={() => setShowModal(false)}
                />
              </div>
            </div>
          </SMKModal>
        </section>
        <section className={classes.inputs}>
          <SMKInput
            type="text"
            id="text"
            label="Text Input"
            value={textInput}
            placeholder="Enter text..."
            required
            darkMode={switchValue}
            onInputChange={(inputValue) => setTextInput(inputValue)}
          />
          <SMKInput
            type="number"
            id="number"
            label="Number Input"
            value={numberInput}
            min={18}
            max={99}
            step={2}
            darkMode={switchValue}
            onInputChange={(inputValue) => setNumberInput(inputValue)}
          />
          <SMKInput
            type="tel"
            id="tel"
            label="Telephone Input"
            value={telInput}
            darkMode={switchValue}
            onInputChange={(inputValue) => setTelInput(inputValue)}
          />
          <SMKInput
            type="email"
            id="email"
            label="Email Input"
            value={emailInput}
            required
            placeholder="Email input..."
            darkMode={switchValue}
            onInputChange={(inputValue) => setEmailInput(inputValue)}
          />
          <SMKInput
            type="password"
            id="password"
            label="Password Input"
            value={passwordInput}
            required
            darkMode={switchValue}
            onInputChange={(inputValue) => setPasswordInput(inputValue)}
          />
          <SMKInput
            type="url"
            id="url"
            label="URL"
            value={urlInput}
            disabled
            darkMode={switchValue}
            onInputChange={(inputValue) => setUrlInput(inputValue)}
          />
        </section>
      </main>
      <footer className={classnames({ [`${classes.darkmode}`]: switchValue })}>
        © SMK 2020. All Rights Reserved.
      </footer>
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
