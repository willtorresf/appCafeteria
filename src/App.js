import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner greeting={"Ofertas"} />}/>
          <Route path="/detail/:itemId" element={<ItemDetailConteiner/>} />
          <Route path="/*" element={<h1>NOT FOUND 404</h1>} />
          <Route path="/category/:categoryId" element={<ItemListConteiner/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
