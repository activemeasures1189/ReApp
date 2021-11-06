import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../User/AddUser.module.css'
import ErrorModal from './ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameinputRef = useRef()
    const ageinputRef = useRef()
    
    const [Error, setError] = useState()
     
  const SubmitUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameinputRef.current.value
    const enteredUserAge = ageinputRef.current.value
    if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
        setError({
            title: 'Invalid Input',
            message: 'Please enter valid name.'
        })
        return
    }
    if(+enteredUserAge < 1){
        setError({
            title: 'Invalid input',
            message: 'Please enter age > 0'
        })
        return
    }
    props.onAddUsers(enteredName, +enteredUserAge)
    nameinputRef.current.value = ''
    ageinputRef.current.value = ''
    
  };
  
const errorHandler = ()=>{
    setError(null)
}

  return (
      <Wrapper>
      {Error && <ErrorModal onConfirm={errorHandler} title={Error.title} message={Error.message} />}
      <Card className={classes.input}>
      <form onSubmit={SubmitUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"  ref={nameinputRef}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"  ref={ageinputRef}></input>
        <Button type='submit'>Add User</Button>
      </form>
      </Card>
      </Wrapper>
);
};

export default AddUser;