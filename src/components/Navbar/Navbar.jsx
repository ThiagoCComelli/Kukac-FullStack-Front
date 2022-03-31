import React from 'react';
import {AiFillCode} from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {

  const scrollTo = (e) => {
    console.log(document.getElementById(e.target.id))
    document.getElementById(`${e.target.id}+`).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  return (
    <div className='mainNavbar'>
      <div className="mainNavbarBox">
        <div className="mainNavbarBoxLogo">
          <AiFillCode />
          <span>Kukac Full-Stack</span>
        </div>
        <div className="mainNavbarBoxItems">
          <span id="pal" onClick={scrollTo}>Palíndromos</span>
          <span id="ced" onClick={scrollTo}>Cédulas</span>
          <span id="cep" onClick={scrollTo}>Consulta CEP</span>
          <span id="gar" onClick={scrollTo}>Garagem</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
