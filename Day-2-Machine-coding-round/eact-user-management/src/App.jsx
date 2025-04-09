import { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addUser = (name) => {
    const newUser = { id: Date.now(), name };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedName) => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, name: updatedName } : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    setSelectedUser(null); 
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleCancel = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>User Management</h1>
      <div>
        <input
          type="text"
          placeholder="Search users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <UserList users={filteredUsers} onSelectUser={handleUserSelect} />
      <UserForm
        selectedUser={selectedUser}
        onAddUser={addUser}
        onUpdateUser={updateUser}
        onDeleteUser={deleteUser}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default App;
