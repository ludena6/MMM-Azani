import './home.css';
import Myimg from './images/azanistyle.svg'
import specimag from './images/specs.webp'
import azani from './images/azani.svg'
import power from './images/power.svg'
import technology from './images/technology.svg'
import Enein from './images/Enein.svg'
function Headimage(){
  return(
    <div className='main'>
      <img src={Myimg} alt=''></img>
      </div>
  )
}
function Specs_image(){
  return(
    <div className='image'>
          <img  src={specimag} alt='no logo'></img>
        </div>
  )
}
function Specs_Content(){
  return(<>
  <table >
    <tr class="cardhead">
     <img  src={azani} alt='no logo'/>
     <span>Specs</span>
     <div class="t">
      <img  src={power} alt='no logo'/>    
    </div> 
    </tr>
    
    <tr class="cardss">
      <td>
        <div className='spec'>
          <div class="cards">
            <div class="card card-1">
              <h2 class="card__title">Horsepower</h2>
              <p class="card__apply">
              <a class="card__link" >1,000 hp <i class="fas fa-arrow-right"></i></a>
              </p>
            </div>
          </div>
        </div >
      </td>
      <td>
            <div class="cards">
              <div class="card card-1">
                <h2 class="card__title">Turning</h2>
                <p class="card__apply">
                <a class="card__link" >1,000 nm<i class="fas fa-arrow-right"></i></a>
                </p>
              </div>
          </div>
      </td>
    </tr>
    <tr class="cardhead f">
    
     <div class="top">
      <img  src={Enein} alt='no logo'/>    
    </div> 
    </tr>
    
    <tr class="cardss">
  
        <div className='spec'>
          <div class="cards">
            <div class="card card-1">
              <h2 class="card__title">Skateboard Aluminium Spaceframe</h2>
              <p class="card__apply">
              <a class="card__link" >Chassis <i class="fas fa-arrow-right"></i></a>
              </p>
            </div>
          </div>
        </div >

      <td>
        <div className='spec'>
            <div class="cards">
              <div class="card card-1">
                <h2 class="card__title">Double Wishbone With Adaptive MR Damping</h2>
                <p class="card__apply">
                <a class="card__link" >Suspension<i class="fas fa-arrow-right"></i></a>
                </p>
              </div>
            </div>
          </div>
      </td>
    </tr>
    <tr class="cardhead ">

     <div class="top">
      <img  src={technology} alt='no logo'/>    
    </div> 
    </tr>
    
    <tr class="cardss">
      <td>
        <div className='spec'>
          <div class="cards">
            <div class="card card-1">
              <h2 class="card__title">Augmented Reality Displays</h2>
            </div>
          </div>
        </div >
      </td>
      <td>
        <div className='spec'>
            <div class="cards">
              <div class="card card-1">
                <h2 class="card__title">M-log Integration</h2>
             
              </div>
            </div>
          </div>
      </td>
    </tr>

  </table>
  
   <table>
    
   
  </table>      
</>)
}
function Specs(){
  return(
    <div className='content'>
        <Specs_image/>
        <Specs_Content/>
    </div>

  )
}
function Home() {
  return (
    <div>
     <Headimage/>
      <Specs/>
      
    </div>
    
  );
}

export default Home;