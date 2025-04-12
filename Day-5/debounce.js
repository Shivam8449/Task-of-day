function debounce(fn, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  
  const myFunction = () => {
    console.log('Function executed!');
  };
  
  const debouncedFunction = debounce(myFunction, 1000);
  
  debouncedFunction();
  debouncedFunction();
  debouncedFunction();  