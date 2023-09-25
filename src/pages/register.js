import React from "react";
import Validation from "./verify";
import { useState,axios } from "react";
import { useNavigate } from "react-router-dom";

 function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  })
  const navigate=useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value]
    }));
  };

   const handleSumbit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name===""&&errors.email===""&&errors.password==="")
    {
      axios.post('http://localhost:8081/book_db',values)
      .then(res=>{
        navigate('/ShopElec');
      })
      .catch(err=>console.log(err));
    }
  }

  return (
    <form action="" onSubmit={handleSumbit}>
      
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleInput} />
        (errors.name && <span>{errors.name}</span>)
    
      
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleInput} />
        (errors.email && <span>{errors.email}</span>)
    

      
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={handleInput} />
        (errors.password && <span>{errors.password}</span>)
      <input type="submit" value=""/> 

   </form>
  );
}

export default Register;
