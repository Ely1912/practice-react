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
  //<React.Fragment></React.Fragment> 
  return (
    <>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={users}/>
    </>
  );
}

export default App;

