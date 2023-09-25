
function Validation(values) {
  let error={}
  const email=/^[^\s@]+@[^\s@]+\.[^\s@]+@/
  const Password= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if (values.name==="") {
    error.name="Name should not be empty"
  }

  
  else{
    error.name=""
  }


  if (values.email==="") {
    error.email="Name should not be empty"
  }

  else if(!email.test(values.email))
  {
    error.email="email donot match"

  }
  else{
    error.email=""
  }

  if (values.Password==="") {
    error.Password="Password should not be empty"
  }

  else if(!Password.test(values.Password))
  {
    error.Password="Password donot match"

  }
  else{
    error.Password=""
  }
   return error;
}
export default Validation;
