import { useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from './config/Routes';
import './App.css';

const styles = {
  logoutButton: {
    textDecoration: 'underline',
    cursor: 'pointer',
  }
};

function App() {
  // const [token, setToken] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  function handleLogout() {
    setToken(null);
    localStorage.removeItem('token');
    alert('You have logged out');
  }

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul>
            <Link to='/'>Home</Link>{'  '}
            <Link to='/shows'>Shows</Link>{'  '}
            <Link to='/addshow'>Add Show</Link>{'  '}
            <Link to='/myshows'>My Shows</Link>{'  '}
            <Link to='/signup'>Signup</Link>{'  '}
            <Link to='/login'>Login</Link>{'  '}
            <Link to='/login'><span style={styles.logoutButton} onClick={handleLogout}>Logout</span></Link>
          </ul>
        </nav>
      </header>

      <div className="main">
        <Routes token={token} setToken={setToken} />
      </div>

      <footer>
        <p className="copyright text-center">
          &copy;2021 Nicholas Gacicia - All Rights Reserved
			  </p>
      </footer>

    </div>
  );
}

export default App;
