import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer';

function App() {

  

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main >
        <ItemListConteiner greeting={'Ofertas'}/>
      </main>
    </div>
  );
}

export default App;
