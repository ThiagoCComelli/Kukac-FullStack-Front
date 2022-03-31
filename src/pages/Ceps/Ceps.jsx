import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import getAllCeps from '../../utils/api/ceps';
import "./Ceps.css"

const Ceps = () => {
  const [allCeps, setAllCeps] = useState([])

  // const changeValues = (

  const makeRequestCedules = async (e) => {
    e.preventDefault()

    const ceps = []

    for(let element of e.target.elements) {
      if (element.tagName === "INPUT") {
        ceps.push(element.value)
      }
    }

    const response = await getAllCeps({ceps: ceps})

    try {
      setAllCeps(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mainCeps">
      <div className="mainCepsBox">
        <h2>Verifique todos os <strong>CEPs</strong> fornecidos por você utilizando nosso sistema</h2>
        <div className="mainCepsBoxContent">
          <div className="mainCepsBoxOptions">
            <form onSubmit={makeRequestCedules}>
              <small>CEP #1:</small>
              <input min={1000000} max={99999999} required placeholder='Ex.: 88130486' type="number"/>
              <small>CEP #2:</small>
              <input min={1000000} max={99999999} required placeholder='Ex.: 88130486' type="number"/>
              <small>CEP #3:</small>
              <input min={1000000} max={99999999} required placeholder='Ex.: 88130486' type="number"/>
              <small>CEP #4:</small>
              <input min={1000000} max={99999999} required placeholder='Ex.: 88130486' type="number"/>
              <small>CEP #5:</small>
              <input min={1000000} max={99999999} required placeholder='Ex.: 88130486' type="number"/>
              <button type='submit'>Consultar</button>
            </form>
          </div>
          <div className="mainCepsBoxContentResult">
            <strong>Todos os CEPs buscados: {allCeps.cepsVerified !== undefined ? "Busca realizada abaixo" : "Aguardando"}</strong>
            <div className="mainCepsBoxContentResultItems">
              {allCeps.cepsVerified?.map((cep, index) => {
                return (
                  <Fragment key={Math.random()}>
                    <div className="mainCepItem">
                      <h3>CEP #{index+1}</h3>
                        <div className='mainCepItemSection'>
                          <small>CEP: </small>
                          <strong>{cep.cep}</strong>
                        </div>
                        <div className='mainCepItemSection'>
                          <small>Logradouro: </small>
                          <strong>{cep.logradouro}</strong>
                        </div>
                        <div className='mainCepItemSection'>
                          <small>Bairro: </small>
                          <strong>{cep.bairro}</strong>
                        </div>
                        <div className='mainCepItemSection'>
                          <small>Localidade: </small>
                          <strong>{cep.localidade}</strong>
                        </div>
                        <div className='mainCepItemSection'>
                          <small>UF: </small>
                          <strong>{cep.uf}</strong>
                        </div>
                    </div>
                  </Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ceps;
