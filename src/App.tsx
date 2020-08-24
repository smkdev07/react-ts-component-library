import React from 'react';

import SMKInput from './components/SMKInput/SMKInput';

const App: React.FC = () => {
  return (
    <div>
      <SMKInput
        type="text"
        id="fullname"
        label="Full Name"
        initialValue=""
        minLength={2}
        maxLength={12}
        required
      />
      <SMKInput
        type="number"
        id="age"
        label="Age"
        initialValue=""
        min={1}
        max={100}
        required
      />
      <SMKInput
        type="email"
        id="email"
        label="Email"
        initialValue=""
        required
      />
      <SMKInput type="tel" id="tel" label="Phone" initialValue="" />
      <SMKInput type="url" id="website" label="Website" initialValue="" />
      <SMKInput
        type="password"
        id="password"
        label="Password"
        initialValue=""
        required
      />
    </div>
  );
};

export default App;
