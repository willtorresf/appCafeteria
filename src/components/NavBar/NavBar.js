import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncMock';

const NavBar = () => {

    const [category, setCategory] = useState([])

    useEffect (()=>{
        getCategories().then(category =>{
            setCategory(category)
        })
    },[])

    return (
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
    );
}

export default NavBar