import { useEffect,useState,useRef } from 'react'
import Home from '../pages/Home/Home'
import Palindromes from '../pages/Palindromes/Palindromes'
import Cedules from '../pages/Cedules/Cedules'
import Ceps from '../pages/Ceps/Ceps'
import Garage from '../pages/Garage/Garage'
import Navbar from './Navbar/Navbar'
import Space from './Space/Space'
import Notification from './Notification/Notification'
import NotificationHelper from '../utils/NotificationHelper/NotificationHelper'
import './App.css';

function App() {
  const [state,setState] = useState(false)
  const notificationRef = useRef(null)

  useEffect(() => {
    NotificationHelper.setup(notificationRef,"NotificationHelper")
    setState(true)
  }, [])

  if(!state) {
    return <></>
  }

  return (
    <div className="mainApp">
      <Notification ref={NotificationHelper.notificationRef}/>
      <Navbar />
      <Home/>
      <Space goTo="pal" header="Palíndromos"/>
      <Palindromes/>
      <Space goTo="ced" header="Cédulas"/>
      <Cedules/>
      <Space goTo="cep" header="Consulta CEP"/>
      <Ceps/>
      <Space goTo="gar" header="Garagem"/>
      <Garage/>
      <Space goTo="" header="Sistema feito por Thiago Comelli"/>
    </div>
  );
}

export default App;
