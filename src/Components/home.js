import './home.css';
import Myimg from './images/azanistyle.svg'
import specimag from './images/specs.webp'
import { Gi3DMeeple } from 'react-icons/gi';
function Home() {
  return (
    <div>
     
      <div className='main'>
      <img src={Myimg} alt='no logo'></img>
      </div>
      <div className='content'>
        <div className='image'>
          <img src={specimag}alt='no img'></img>
        </div>
        <div className='spec'>
          <h1>AZANI</h1>
          <ul>
            <li> <Gi3DMeeple />1,000 <br/> hpPower</li>
          </ul>
        
        </div>
      </div>
    </div>
  
    
  );
}

export default Home;