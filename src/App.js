import { useState } from "react";


function App() {
  const [person,setPerson] = useState({
      firstName:'Ahmed',
      lastName:'Ali',
      email:'abc@gmail.com'
  })
  const handleFirstName = (e) =>{
    person.firstName = e.target.value;
  }
  const handleLastName = (e) =>{
    person.lastName = e.target.value;
  }
  const handleEmail = (e) =>{
    person.email = e.target.value;
  }
  return (
    <>
      <label>
        First Name:
        <input 
          value={person.firstName}
          onChange={handleFirstName}
          />
      </label>
      <label>
        Last Name:
        <input 
          value={person.lastName}
          onChange={handleLastName}
          />
      </label>
      <label>
        Email:
        <input 
          value={person.email}
          onChange={handleEmail}
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
