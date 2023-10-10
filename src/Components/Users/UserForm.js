import React, { useState, Fragment } from "react";

import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
  const [enteredUserName, setUserEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const newUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message: 'please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) { //entered age converted string to number by adding + in front of enteredAge
      setError({
        title:'Invalid age',
        message: 'please enter a valid age ( > 0).'
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setUserEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>  
    {/* <Fragment> or <React.Fragment> */}
    {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/> }
    <Card className={classes.input}>
      <form onSubmit={newUserHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div>
          <label>Age (years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    {/* </Fragment> or </React.Fragment> */}
    </>  );
};

export default UserForm;
