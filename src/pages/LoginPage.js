import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function LoginPage({ setToken }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      return setError('All fields are required');
    }

    const userData = { email, password };
    console.log(userData);

    fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        }
        return setError(res.statusText);
      })
      .then((data) => {
        setToken(data.token);  // ~Update authState in App
        localStorage.setItem('token', data.token);  // ~Store Token in localStorage
        history.push('/myshows');  // ~Redirect myshows page
      })
      .catch((err) => setError(err.message));
  }

  return (
    <div>
      <h1 className="mt-5">Login</h1>
      {error && <h2>{error}</h2>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="m-2">
          <label htmlFor="password">Password: </label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-close-white m-2">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
