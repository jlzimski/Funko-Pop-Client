import './App.css';
import Sitebar from './site/Navbar';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
import ModalExample from './site/ModalExample';
import ModalExample2 from './site/ModalExample2';
import { useEffect, useState } from 'react';
import Auth from './components/user/Auth'

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
      {/* <ModalExample2 />
      <ModalExample /> */}
      <Body />
      <br/>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;