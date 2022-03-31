import axios from 'axios'

// const url = "https://kukac-fullstack.herokuapp.com/noAuth/palindrome"
const url = "http://localhost:3100/noAuth/palindrome"

const getAllPalindromes = async (config) => {
  try {
      const result = await axios.get(url, {params: 
        config
      })
      return result
  } catch {
      return null
  }
  
}

export default getAllPalindromes