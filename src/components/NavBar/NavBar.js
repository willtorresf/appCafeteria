import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategory } from '../../services/firebase/firestore';

const NavBar = () => {

    const [category, setCategory] = useState([])

    useEffect (()=>{
        getCategory().then((cat) => {
            setCategory(cat);
        }).catch(error => {
            console.log(error)
        });
    },[])

    return (
        <header>
            <nav className='navBar'>
                <div>
                    <Link to='/'>
                        <img src={'./images/logoClaudia.png'} alt="Logo" className='logoNav'/>
                    </Link>
                </div>

                {category.map(cat => 
                    <div key={cat.id}><NavLink to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'activeLink' : 'Link'}>{cat.name}</NavLink></div> 
                )}

                <div>
                    <button className='btnNav'>Login</button>
                </div>
                
                <CartWidget/>
            </nav>
        </header>
    );
}

export default NavBar