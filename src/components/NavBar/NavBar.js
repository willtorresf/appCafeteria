import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js'

const NavBar = () => {

    return (
        <nav className='navBar'>
            <div>
                <img src={'./images/logoClaudia.png'} alt="Logo" className='logoNav'/>
            </div>
            
            <div>
                <ul className='navList'>
                    <li>Cafés</li>
                    <li>Tortas</li>
                    <li>Panes</li>
                </ul>
            </div>

            <div>
                <button className='btnNav'>Login</button>
            </div>
            
            <CartWidget/>
        </nav>
    );
}

export default NavBar