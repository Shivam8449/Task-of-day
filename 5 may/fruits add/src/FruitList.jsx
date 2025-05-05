import React from "react";

function FruitList({ fruits }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Available Fruits:</h2>
      <ul className="list-disc list-inside">
        {fruits.map((fruit, index) => (
          <li key={index} className="text-lg">{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
