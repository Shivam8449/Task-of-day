import { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [input, setInput] = useState('');

  const n = parseInt(input, 10);

  const factorial = useMemo(() => {
    if (isNaN(n) || n < 0) return 'Enter a non-negative integer';
    if (n === 0 || n === 1) return 1;

    let result = 1n; 
    for (let i = 2n; i <= BigInt(n); i++) {
      result *= i;
    }
    return result.toString(); 
  }, [n]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        min="0"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a non-negative integer"
      />
      <div style={{ marginTop: '1rem' }}>
        <strong>Result:</strong> {factorial}
      </div>
    </div>
  );
};

export default FactorialCalculator;
