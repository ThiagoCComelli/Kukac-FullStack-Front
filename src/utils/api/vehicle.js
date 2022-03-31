import axios from 'axios'

// const url = "https://kukac-fullstack.herokuapp.com/noAuth/newVehicle"
const url = "http://localhost:3100/noAuth/newVehicle"

const saveVehicle = async (config) => {
  try {
      const result = await axios.post(url, 
        config
      )
      return result
  } catch {
      return null
  }
  
}

export default saveVehicle