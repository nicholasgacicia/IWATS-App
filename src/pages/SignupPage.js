import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function SignupPage() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !password || !password2) {
      return setError('All fields are required');
    }

    if (password !== password2) {
      return setError('Passwords do not match');
    }

    const newUser = { name, email, password };
    console.log(newUser);

    fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        }
        return setError(res.statusText);
      })
      .then((data) => {
        console.log(data);
        history.push('/login');
      })
      .catch((err) => setError(err.message))
  }

  return (
    <div>
      <h1>Signup</h1>

      {error && <h2>{error}</h2>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label><br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ex: Joe Schmoe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label><br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ex: jschmoe@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password2">Confirm Password: </label><br />
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
