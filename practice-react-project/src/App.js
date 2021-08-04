import React, {useState} from 'react';
import AddUser from "./Users/AddUser";
import UserList from './Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (uName, uAge) =>{
    setUsers((prevState)=>{
      return [...prevState, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
