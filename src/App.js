import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListConteiner greeting={'Hola Mundo, Proyecto de React JS William Torres'}/>
      </main>
    </div>
  );
}

export default App;
