import React, {useState} from 'react';

import './App.css';
import UserForm from './Components/Users/UserForm';
import UsersList from './Components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollage) =>{
      setUsersList((prevUSerList) => {
        return [...prevUSerList, {id: Math.random().toString(), name: uName, age: uAge, collage: uCollage}];
      });
  };


  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
