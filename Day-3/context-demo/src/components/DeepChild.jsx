import React from 'react';
import { useMessage } from '../context/MessageContext';

const DeepChild = () => {
  const message = useMessage();

  return <h3>Deep Child Received: {message}</h3>;
};

export default DeepChild;
