import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { menuData } from './menuData';
import Logo from '../../../src/WheelGoodLogo.png';

const NavBar = () => {
   const [open, setOpen] = useState(true)

  console.warn('state', open)

  return (

    <div className='NavBar'>
      <div className='logo'><img src={Logo} /></div>
        <div className="container">
            <div className="menu-button" onClick={() => setOpen(!open)}>
              <i className="fas fa-bars"></i>
            </div>
            {/* Sidebar */ }
              {menuData.length && (
                <nav className={ `nav ${open ? 'show' : 'hide'}` }><ul className="menu-items">
                  {menuData.map( item => (
                    <li className="menu-list" key={item.label}>
                      <a className="menu-link" href={item.url}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                </nav>
              )}
        </div>
    </div>
  );
};

export default NavBar;


{/* <nav className='menu'>
<Link to='#'>Home</Link>
<Link to='#'>Map Legend</Link>
<Link to='#'>About</Link>
<Link to='#'>Contact</Link>
</nav> */}