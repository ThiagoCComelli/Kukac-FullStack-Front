import axios from 'axios'

// const url = "https://kukac-fullstack.herokuapp.com/noAuth/checkoutCounter"
const url = "http://localhost:3100/noAuth/checkoutCounter"

const getAllCedules = async (config) => {
  try {
      const result = await axios.get(url, {params: 
        config
      })
      return result
  } catch {
      return null
  }
  
}

export default getAllCedules