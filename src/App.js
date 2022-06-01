import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((prev) => [
      ...prev,
      { name: username, age: userAge, id: Math.random() },
    ]);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
