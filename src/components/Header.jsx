import { Link } from 'react-router-dom';

import '../css/header.css';


import Nav from './Navbar'

export default function Header() {
    return(
        <div className='header'>
            <h1 id='name' className="m-3">       
        <Link
            to="/"
          >
            Garret Hildebrandt
          </Link>        </h1>
            <Nav />
        </div>
    )
}