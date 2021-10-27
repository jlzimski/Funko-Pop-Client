import './App.css';
import Sitebar from './site/Navbar';
import Header from './site/Header';
import Footer from './site/Footer';
import { useEffect, useState } from 'react';
import Auth from './components/user/Auth'
import Items from './components/items/Items';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Sitebar clickLogout={clearToken}/>
      <Header />
      {/* <Auth updateToken={updateToken} /> */}
      <div className="mainBody">
      <br/> 
      <Items />
      <br/>
      </div>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;