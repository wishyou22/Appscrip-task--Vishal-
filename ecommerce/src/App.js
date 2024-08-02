import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Products from './Components/Products/Products';
import ProductNavbar from './Components/ProductNavbar/ProductNavbar';
import Footer from './Components/Footer/Footer';

import PhoneView from './Components/Footer/PhoneView';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductNavbar/>
      
      <Footer/>
     <PhoneView/>
    </div>
  );
}

export default App;
