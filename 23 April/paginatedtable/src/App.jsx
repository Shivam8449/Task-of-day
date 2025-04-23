import React, { useState } from 'react';
import DataTable from './components/DataTable';
import ConfirmModal from './components/ConfirmModal';
import './App.css'

const sampleData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  value: Math.floor(Math.random() * 100),
}));

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'value', label: 'Value' },
];

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    alert('Confirmed!');
    setShowModal(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Paginated Table + Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <DataTable data={sampleData} columns={columns} />

      {showModal && (
        <ConfirmModal
          title="Confirm Action"
          message="Are you sure you want to proceed?"
          onConfirm={handleConfirm}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
