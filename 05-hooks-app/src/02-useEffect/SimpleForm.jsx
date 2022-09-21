import { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: 'ryan@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]); // [] -> significa que useEffect solo se va a ejecutar una vez

  useEffect(() => {
    // console.log('email changed');
  }, [email]); // [] -> significa que useEffect solo se va a ejecutar una vez

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="hello@hello.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === 'Ryan Gosling' && <Message />}
    </>
  );
};
