import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from './config/Routes';
import Footer from './components/universal/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const styles = {
  logoutButton: {
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
    <div className="App">
      <nav className="navbar-nav text-center text-white p-2 m-auto">
        <ul>
          <Link className="mx-lg-5" to='/'>Home</Link>{'  '}
          <Link className="mx-lg-5" to='/shows'>Shows</Link>{'  '}
          <Link className="mx-lg-5" to='/addshow'>Add Show</Link>{'  '}
          <Link className="mx-lg-5" to='/myshows'>My Shows</Link>{'  '}
          <Link className="mx-lg-5" to='/signup'>Signup</Link>{'  '}
          <Link className="mx-lg-5" to='/login'>Login</Link>{'  '}
          <Link className="mx-lg-5" to='/login'><span style={styles.logoutButton} onClick={handleLogout}>Logout</span></Link>
        </ul>
      </nav>

      <div>
        <Routes token={token} setToken={setToken} />
      </div>

      <Footer className="footer" />

    </div>
  );
}

export default App;
