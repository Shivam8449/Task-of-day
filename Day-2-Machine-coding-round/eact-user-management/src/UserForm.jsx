import { useState, useEffect } from 'react';

function UserForm({
  selectedUser,
  onAddUser,
  onUpdateUser,
  onDeleteUser,
  onCancel,
}) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
    } else {
      setName('');
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      onUpdateUser(name);
    } else {
      onAddUser(name);
    }
    setName('');
  };

  return (
    <div>
      <h2>{selectedUser ? 'Update User' : 'Create User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
        />
        <div>
          <button type="submit">{selectedUser ? 'Update' : 'Create'}</button>
          <button type="button" onClick={onCancel} disabled={!selectedUser}>
            Cancel
          </button>
          {selectedUser && (
            <button type="button" onClick={onDeleteUser}>
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserForm;
