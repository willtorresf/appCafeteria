import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const handleOnAdd = (quantity,stock)=>{
    if (stock === 0) {
      console.log("No hay stock de este producto");
    } else {
      console.log(`Se agregaron ${quantity} productos al carrito`);
    }
  }

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main >
        <ItemListConteiner greeting={'Hola Mundo, Proyecto de React JS William Torres'}/>
        <ItemCount initial={1} stock={20} onAdd={handleOnAdd}/>
      </main>
    </div>
  );
}

export default App;
