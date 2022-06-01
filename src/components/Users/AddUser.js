import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUSername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    //console.log('add user function')

    if (enteredUsername.trim() === 0 || enteredAge.length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age ( non-empty )',
      });
      return;
    }
    //transfroms string (enteredAge), to number to compare
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0 )',
      });
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUSername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    //console.log('user input change function')
    setEnteredUSername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    //console.log('age input change function')
    setEnteredAge(e.target.value);
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
