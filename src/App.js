import './App.css';
import Sitebar from './site/Navbar';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
import ModalExample from './site/ModalExample';
import ModalExample2 from './site/ModalExample2';

function App() {
  return (
    <div className="App">
      <Header />
      <Sitebar />
      <ModalExample2 />
      <ModalExample />
      <Body />
      <br/>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;