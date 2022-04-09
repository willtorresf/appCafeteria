import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

function App() {

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main >
        <ItemListConteiner greeting={'Ofertas'}/>
        <ItemDetailConteiner/>
      </main>
    </div>
  );
}

export default App;
