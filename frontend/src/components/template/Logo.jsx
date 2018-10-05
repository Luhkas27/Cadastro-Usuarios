import './Logo.css';
import nerdboy from '../../assets/imgs/nerdboy.png';
import React from 'react';
import { Link } from 'react-router-dom';


export default props => 
    <aside className="nerdboy">
        <Link to="/" className="nerdboy">
            <img src={nerdboy} alt="nerdboy" />
        </Link>
    </aside>