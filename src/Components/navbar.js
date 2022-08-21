
import './navbar.css';
import Logo from './images/logo.svg';

function Navbar() {
  return (
    <header>
        <img src={Logo} alt='no logo'> 
        </img>
        <nav>
            <li>HOME</li>
            <li>SPECE</li>            
            <li>MANUFACTURER</li>
            <li>MORE</li>
        </nav>
    </header>

  );
}

export default Navbar;