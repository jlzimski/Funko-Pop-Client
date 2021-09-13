import './App.css';
import Sitebar from './site/Navbar';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
import ModalExample from './site/ModalExample';

function App() {
  return (
    <div className="App">
      <Header />
      <Sitebar />
      <ModalExample />
      <Body />
      <br/>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;