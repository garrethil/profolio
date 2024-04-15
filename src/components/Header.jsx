import { Link } from 'react-router-dom';

import Nav from './Navbar'

export default function Header() {
    return(
        <div>
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