import { useState } from "react";


function App() {
  const [person,setPerson] = useState({
      firstName:'Ahmed',
      lastName:'Ali',
      email:'abc@gmail.com'
  })
 const handleChange = (e) =>{
  setPerson({
    ...person,
    [e.target.name]: e.target.value
  });
 }
  return (
    <>
      <label>
        First Name:
        <input 
          value={person.firstName}
          onChange={handleChange}
          />
      </label>
      <label>
        Last Name:
        <input 
          value={person.lastName}
          onChange={handleChange}
          />
      </label>
      <label>
        Email:
        <input 
          value={person.email}
          onChange={handleChange}
          />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

export default App;
