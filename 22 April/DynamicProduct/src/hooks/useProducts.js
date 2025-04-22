import { useEffect, useState } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return products;
}
