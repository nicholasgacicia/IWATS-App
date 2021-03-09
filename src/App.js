import { useState } from 'react';
import Routes from './config/routes';
import NavBar from './components/Universal/NavBar';
// import Footer from './components/Universal/Footer';

import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <NavBar />
      <div>
        <Routes token={token} setToken={setToken} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
