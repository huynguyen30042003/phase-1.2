import Header from './components/Header/Header';
import './App.scss';
import NavBox from './components/NavBox/NavBox';
import Quality from './components/Quality/Quality';
import Test from './components/Test/Test';
import Management from './components/Management/Management';
import References from './components/References/References';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className='Main'>
      <Header NavBox={NavBox}></Header>
      <Quality></Quality>
      <Test></Test>
      <Management></Management>
      <References></References>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
