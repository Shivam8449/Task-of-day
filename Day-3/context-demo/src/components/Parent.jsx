import React from 'react';
import MiddleChild from './MiddleChild';
import { MessageContext } from '../context/MessageContext';

const Parent = () => {
  const message = 'Hello from Context!';

  return (
    <MessageContext.Provider value={message}>
      <div>
        <h2>Parent Component</h2>
        <MiddleChild />
      </div>
    </MessageContext.Provider>
  );
};

export default Parent;
