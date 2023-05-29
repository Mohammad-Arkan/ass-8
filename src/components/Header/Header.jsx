import React from 'react';
import logo from '../../assets/fbe38918-988e-49f6-b57b-f74d24c41697.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;