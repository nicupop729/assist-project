import { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [inputName, setInputName] = useState('');
  const [inputSurName, setInputSurName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [user, setUser] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const user = {
      name: inputName,
      surName: inputSurName,
      number: inputNumber,
      email: inputEmail      
    }
    setInputName('');
    setInputSurName('');
    setInputNumber('');
    setInputEmail('');

    setUser(JSON.stringify(user));
  };


  return (
  <div>
    <form className="form" onSubmit={submitForm}>
      <input type="text" value={inputName} placeholder="Your name" onChange={(e) => setInputName(e.target.value)} required />
      <input type="text" value={inputSurName} placeholder="Your surname" onChange={(e) => setInputSurName(e.target.value)} required />
      <input type="number" value={inputNumber} placeholder="Your phone number" onChange={(e) => setInputNumber(e.target.value)} required />
      <input type="email" value={inputEmail} placeholder="Your email" onChange={(e) => setInputEmail(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
    <div>
      <p>{user}</p>
    </div>
  </div>
)}

export default Contact; 
