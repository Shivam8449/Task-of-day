import React from 'react';
import DeepChild from './DeepChild';

const MiddleChild = () => {
  return (
    <div>
      <p>Middle Component</p>
      <DeepChild />
    </div>
  );
};

export default MiddleChild;
