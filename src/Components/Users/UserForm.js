import React, { useState, useRef } from "react";

import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collageNameInputRef = useRef();

  const [error, setError] = useState();

  const newUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollageName = collageNameInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollageName.trim().length === 0 ) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      //entered age converted string to number by adding + in front of enteredAge
      setError({
        title: "Invalid age",
        message: "please enter a valid age ( > 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollageName);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collageNameInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {/* <Fragment> or <React.Fragment> */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={newUserHandler}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div>
            <label>Age (years):</label>
            <input
              type="number"
              ref={ageInputRef}
            />
          </div>
          <div>
            <label>Collage name:</label>
            <input
              type="text"
              ref={collageNameInputRef}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {/* </Fragment> or </React.Fragment> */}
    </>
  );
};

export default UserForm;
