import {useState} from "react";
import "./app.css"
import FormInput from "./components/FormInput"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError('There was an error fetching data!');
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend Connected to Backend</h1>
        {error ? (
          <p>{error}</p>
        ) : data ? (
          <div>
            <h2>Data from Backend:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
function App() {
 const [values, setValues] = useState({
  username: " ",
  email: " ",
  birthday: " ",
  password: " ",
  confirmPassword: " ",
 });
 const inputs = [
{

  id: 1,
  name:"username",
  type:"text",
  placeholder: "Username",
  errorMessage: "Username should be 3-14 characters and should not include any special characters",
  label: "Username",
  pattern: "^[A-Za-z0-9]{3,16}$",
  required: true, 
},
{

  id: 2,
  name:"email",
  type:"email",
  placeholder: "Email",
  errorMessage: "Email should be valid",
  label: "Email",
  required: true,
},
{

  id: 3,
  name:"birthday",
  type:"date",
  placeholder: "Birthday",
  label: "Birthday",
},
{

  id: 4,
  name:"password",
  type:"password",
  placeholder: "Password",
  errorMessage: "Password should be between 8-20 characters and include at least 1 letter, 1 number, and 1 special character",
  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  label: "Password",
},
{
  id: 5,
  name:"Confirm Password ",
  type:"password",
  placeholder: "Confirm Password",
  errorMessage: "Passwords don't match, try again",
  pattern: values.password,
  label: "Confirm Password",
},
];
 
 const handleSubmit = (e) => {
  e.preventDefault();
 };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  
};
 return (
  <div className = "app">
    <form onSubmit = {handleSubmit}>
      <h1>Register</h1>
    {inputs.map((input) => (
    <FormInput key = {input.id} {...input} value = {values[input.name]} onChange = {onChange}/>
    ))}
    <button>Submit</button>
    </form>
    </div>
 );
};
};
export default App;
