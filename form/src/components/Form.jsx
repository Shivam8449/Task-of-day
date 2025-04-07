import React, { useState, useRef, useEffect } from 'react';

function Form() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with input value:', inputValue);
    inputRef.current.focus();
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputField">Input:</label>
        <input
          id="inputField"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
