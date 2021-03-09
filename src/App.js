import routes from './config/routes';
import NavBar from './components/Universal/NavBar';
// import Footer from './components/Universal/Footer';

import './App.css';


function App() {
  return (
    <div>
      <NavBar />

      <div>
        {routes}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
