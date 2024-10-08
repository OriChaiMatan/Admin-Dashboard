// import icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';
import Header from './cmps/Header';
import SideBar from './cmps/SideBar';
import Main from './cmps/Main';
import Footer from './cmps/Footer';
import ScroolBack from './cmps/ScroolBack';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
      <Footer />
      <ScroolBack />
    </>
  );
}

export default App;
