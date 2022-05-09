import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart/Cart'
import {CartContextProvider} from './context/CartContext'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListConteiner greeting={"Ofertas"} />}/>
            <Route exact path="/detail/:itemId" element={<ItemDetailConteiner/>} />
            <Route exact path="/*" element={<h1>NOT FOUND 404</h1>} />
            <Route exact path="/category/:categoryId" element={<ItemListConteiner/>} />
            <Route exact path="/cart" element = {<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
