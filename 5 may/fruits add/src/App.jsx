import React, { useState } from "react";
import FruitList from "./FruitList";
import AddFruit from "./AddFruit";
import './App.css'

function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fruit Manager 🍊</h1>
      <AddFruit fruits={fruits} setFruits={setFruits} />
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;
