import './App.css';
import Sitebar from './site/Navbar';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
import { useEffect, useState } from 'react';
import Auth from './components/user/Auth'
// import CollectionCreate from './components/lists/CollectionCreate';
// import ListIndex from './components/lists/ListIndex';
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
      {/* <ListIndex updateToken={updateToken} /> */}
      <div className="mainBody">
      <br/> 
      <Items />
      {/* <Body /> */}
      <br/>
      </div>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;