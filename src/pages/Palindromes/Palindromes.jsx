import React, { Fragment } from 'react';
import { useState } from 'react';
import getAllPalindromes from '../../utils/api/palindrome';
import "./Palindromes.css"

const Palindromes = () => {
  const [range, setRange] = useState({startAt: 0, endAt: 0})
  const [allPalindromes, setAllPalindromes] = useState([])

  const changeRange = (e) => {
    setRange({...range,[e.target.id]: e.target.value})
  }

  const makeRequestPalindromes = async () => {
    const response = await getAllPalindromes(range)

    try {
      setAllPalindromes(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mainPalindromes">
      <div className="mainPalindromesBox">
        <h2>Verifique a quantidade de <strong>palindromos</strong> dentro do alcance fornecido</h2>
        <div className="mainPalindromesBoxContent">
          <div className="mainPalindromesBoxOptions">
            <small>Valor de inicio:</small>
            <input id='startAt' onChange={changeRange} placeholder='Ex.: 4' type="number"/>
            <small>Valor de parada:</small>
            <input id='endAt' onChange={changeRange} placeholder='Ex.: 436' type="number"/>
            <button onClick={makeRequestPalindromes}>Consultar</button>
          </div>
          <div className="mainPalindromesBoxContentResult">
            <strong>Todos os palindromos: {allPalindromes.parameters !== undefined ? `De ${allPalindromes.parameters.startAt} até ${allPalindromes.parameters.endAt}` : "Aguardando"}</strong>
            <div className="mainPalindromesBoxContentResultItems">
              {allPalindromes.allPalindromes?.map((palindrome) => {
                return (
                  <Fragment key={palindrome}>
                    <span className="mainPalindromeItem">
                      {palindrome}
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

export default Palindromes;
