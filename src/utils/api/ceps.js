import axios from 'axios'

// const url = "https://kukac-fullstack.herokuapp.com/noAuth/ceps"
const url = "http://localhost:3100/noAuth/ceps"

const getAllCeps = async (config) => {
  console.log(config)
  try {
      const result = await axios.post(url,
        config
      )
      return result
  } catch {
      return null
  }
  
}

export default getAllCeps