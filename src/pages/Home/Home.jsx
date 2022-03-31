import React from 'react';
import './Home.css'

const Home = () => {

  const scrollTo = (e) => {
    console.log(document.getElementById(e.target.id))
    document.getElementById(`${e.target.id}+`).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  return (
    <div className='mainHome'>
      <img src={`${process.env.PUBLIC_URL}/images/hero.jpg`} alt="keyboard hero page"/>
      <span className="linearGradientHero"></span>
      <div className="mainHomeBox">
        <div className="mainHomeBoxContent">
          <div className="mainHomeBoxContentItem">
            <h1>Desafio Full-Stack para a Kukac</h1>
            <p>Sistema completo com interface Web feita com ReactJS e servidor Node utilizando TypeScript</p>
            <div className="mainHomeBoxContentItemBlocks">
              <span>
                <h2>4</h2>
                <small>Desafios propostos</small>
              </span>
              <span>
                <h2>100%</h2>
                <small>Desafios completados</small>
              </span>
            </div>
            <div className="mainHomeBoxContentItemOptions">
              <span id="pal" onClick={scrollTo}>Palíndromos</span>
              <span id="ced" onClick={scrollTo}>Cédulas</span>
              <span id="cep" onClick={scrollTo}>CEP</span>
              <span id="gar" onClick={scrollTo}>Garagem</span>
            </div>
          </div>
          <div className="mainHomeBoxContentItem">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
