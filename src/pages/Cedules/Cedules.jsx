import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import getAllCedules from '../../utils/api/cedules';
import "./Cedules.css"

const Cedules = () => {
  const [values, setValues] = useState({purchaseValue: 0, moneyProvided: 0})
  const [allCedules, setAllCedules] = useState([])

  const changeValues = (e) => {
    setValues({...values,[e.target.id]: e.target.value})
  }

  const makeRequestCedules = async () => {
    const response = await getAllCedules(values)

    try {
      setAllCedules(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mainCedules">
      <div className="mainCedulesBox">
        <h2>Verifique a quantidade minima de <strong>cédulas</strong> para o troco da sua compra</h2>
        <div className="mainCedulesBoxContent">
          <div className="mainCedulesBoxOptions">
            <small>Valor da compra:</small>
            <input onChange={changeValues} id='purchaseValue' placeholder='Ex.: 14' type="number"/>
            <small>Valor entregue:</small>
            <input onChange={changeValues} id='moneyProvided'  placeholder='Ex.: 436' type="number"/>
            <button onClick={makeRequestCedules}>Consultar</button>
          </div>
          <div className="mainCedulesBoxContentResult">
            <strong>Todos as cédulas: {allCedules.parameters !== undefined ? `Foi pago R$ ${allCedules.parameters.moneyProvided}, para o total de R$ ${allCedules.parameters.purchaseValue}, gerando um troco de R$ ${allCedules.parameters.change}` : "Aguardando"}</strong>
            <div className="mainCedulesBoxContentResultItems">
              {allCedules.moneyResult?.map((cedule) => {
                return (
                  <Fragment key={Object.keys(cedule)[0]}>
                    <span className="mainCeduleItem">
                      Notas de {Object.keys(cedule)[0]} = <strong>{Object.values(cedule)[0]}</strong> unidades
                    </span>
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

export default Cedules;
