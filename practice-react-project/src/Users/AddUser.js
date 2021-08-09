import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrappers';


const AddUser = (props)=> {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const [enteredUsername, setEnteredUsername]= useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error , setError] = useState();

  const addUserHandler = (event)=>{
    event.preventDefault();
    console.log(nameInputRef.current.value);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title : 'invalid input',
        message : 'Please enter a valid name and age',
      });
      return;
    }
    if (+enteredAge < 1){      
      setError({
        title : 'invalid Age',
        message : 'Please enter a valid age (>0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    //console.log(enteredAge, enteredUsername);
    //with ref i wouldnt need all those functions and to reset the logic we could use
    // nameInputRef.current.value = '';
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event)=>{
    setEnteredUsername(event.target.value);
  } 

  const ageChangeHandler = (event)=>{
    setEnteredAge(event.target.value);
  } 

  const errorMessageHandler = () =>{
    setError(null);
    setEnteredUsername('');
    setEnteredAge('');
  }
return( <Wrapper>
  {error && <ErrorModal title={error.title} message={error.message} onClickHandler={errorMessageHandler}/> }
 <Card className={classes.input}>
<form onSubmit={addUserHandler}>
  <label htmlFor="username">Username</label>
  <input id="username" type="text" value={enteredUsername} ref={nameInputRef} onChange={usernameChangeHandler} />
  <label htmlFor="age">Age (Years)</label>
  <input id="age" type="number" value={enteredAge} ref={ageInputRef} onChange={ageChangeHandler}/>
  <Button type="submit">Add User</Button>
</form>
</Card>
</Wrapper>
);
};

export default AddUser;