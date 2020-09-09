import React, { useState } from 'react';

import SMKToolbar from './components/SMKToolbar/SMKToolbar';
import SMKCard from './components/SMKCard/SMKCard';
import SMKAccordion, {
  AccordionItem,
} from './components/SMKAccordion/SMKAccordion';
import SMKProgressBar from './components/SMKProgressBar/SMKProgressBar';
import SMKInput from './components/SMKInput/SMKInput';
import SMKButton from './components/SMKButton/SMKButton';

const App: React.FC = () => {
  const [items, setItems] = useState([
    {
      title: 'Test 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reiciendis nobis blanditiis facere, animi rerum natus quidem adipisci quae similique?',
      isExpanded: false,
    },
    {
      title: 'Test 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reiciendis nobis blanditiis facere, animi rerum natus quidem adipisci quae similique?',
      isExpanded: true,
    },
    {
      title: 'Test 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reiciendis nobis blanditiis facere, animi rerum natus quidem adipisci quae similique?',
      isExpanded: false,
    },
  ]);
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <SMKToolbar title="SMK Component Library">
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
        </ul>
      </SMKToolbar>
      <div style={{ margin: '1rem', padding: '1rem' }}>
        <SMKCard title="Card Title" subTitle="card sub-title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            mollitia delectus aliquam totam, sint commodi, aliquid beatae
            tempora eum possimus repellat et quos maiores neque!
          </p>
        </SMKCard>
      </div>
      <div style={{ width: '75%', margin: '0 auto' }}>
        <SMKAccordion
          items={items}
          onClickHandler={(index) => {
            const updatedItems = [...items];
            const updatedItem = { ...items[index] };
            updatedItem.isExpanded = !updatedItem.isExpanded;
            updatedItems[index] = updatedItem;
            setItems((prevState) => updatedItems);
          }}
        />
      </div>
      <SMKProgressBar currentValue={progress} maxValue={100} />
      <SMKButton
        id="update-progress"
        label="Update Progress"
        onClickHandler={() =>
          setProgress((prevState) => {
            if (prevState < 100) return prevState + 10;
            else return 100;
          })
        }
      />
      {/* <SMKInput
        id="full-name"
        label="Full Name"
        onInputChange={(inputValue) => setFullName((prevState) => inputValue)}
        type="text"
        value={fullName}
        required
      />
      <SMKButton
        id="my-button"
        label="Pres Me"
        onClickHandler={() => console.log('Pressed!')}
      /> */}
    </div>
  );
};

export default App;

const TEST_ITEMS: AccordionItem[] = [];
