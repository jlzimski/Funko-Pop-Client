import './App.css';
import Sitebar from './site/Navbar';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
import { useEffect, useState } from 'react';
import Auth from './components/user/Auth'
import CollectionCreate from './components/lists/CollectionCreate';
import ListIndex from './components/lists/ListIndex';

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
      <Header />
      <Sitebar clickLogout={clearToken}/>
      <Auth updateToken={updateToken} />
      <ListIndex updateToken={updateToken} />
      <br/> 
      <Body />
      <br/>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;