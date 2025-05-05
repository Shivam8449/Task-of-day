import React, { useState } from "react";

function AddFruit({ fruits, setFruits }) {
  const [newFruit, setNewFruit] = useState("");

  const handleAddFruit = () => {
    if (newFruit.trim() === "") return;
    setFruits([...fruits, newFruit.trim()]);
    setNewFruit("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Enter new fruit"
        className="border border-gray-300 px-3 py-2 mr-2 rounded"
      />
      <button
        onClick={handleAddFruit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Fruit
      </button>
    </div>
  );
}

export default AddFruit;
