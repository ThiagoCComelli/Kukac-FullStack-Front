import React from 'react';
import { RiMotorbikeFill } from 'react-icons/ri';
import { FaCarAlt } from 'react-icons/fa';
import "./Garage.css"
import { useState } from 'react';
import NotificationHelper from "../../utils/NotificationHelper/NotificationHelper"
import saveVehicle from '../../utils/api/vehicle';

const Garage = () => {
  const [vehicle, setVehicle] = useState({type:"car",model: "", brand: "", year: "", doors: "", passengers: "", tires: ""})

  const changeValue = (e) => {
    setVehicle({...vehicle,[e.target.id]: e.target.value})
  }

  const makeRequestVehicles = async (e) => {
    e.preventDefault()

    const response = await saveVehicle(vehicle)

    try {
      if (response.data.fileSaved) {
        NotificationHelper.notificationRef.current.newNotification({title: "Sucesso!", description: "Veiculo adicionado ao banco de dados"})
      } else {
        NotificationHelper.notificationRef.current.newNotification({title: "Falha!", description: "Veiculo não foi adicionado ao banco de dados"})
      }
    } catch (err) {
      NotificationHelper.notificationRef.current.newNotification({title: "Falha!", description: "Veiculo não foi adicionado ao banco de dados"})
    }
  }

  return (
    <div className="mainGarage">
      <div className="mainGarageBox">
        <h2>Adicione seus veículos para a <strong>garagem</strong> do nosso sistema</h2>
        <div className="mainGarageBoxContent">
          <div className="mainGarageBoxContentVehicleTypes">
            <div className="mainGarageBoxContentVehicleTypesItem">
              <span onClick={() => {
                setVehicle({...vehicle, type: "car"})
              }} className={`${vehicle.type === "car" ? "vehicleSelected" : ""}`}>
                <FaCarAlt />
                Carro
              </span>
            </div>
            <div className="mainGarageBoxContentVehicleTypesItem">
              <span onClick={() => {
                setVehicle({...vehicle, type: "motorcycle"})
              }} className={`${vehicle.type === "motorcycle" ? "vehicleSelected" : ""}`}>
                <RiMotorbikeFill />
                Moto
              </span>
            </div>
          </div>
          <div className="mainGarageBoxContentVehicleConfigs">
            <form onSubmit={makeRequestVehicles}>
              <div className="mainGarageBoxContentVehicleConfigsAll">
                <div className="mainGarageBoxContentVehicleConfigsItem">
                  <small>Marca:</small>
                  <input required id="brand" onChange={changeValue} placeholder='Ford'/>
                </div>
                <div className="mainGarageBoxContentVehicleConfigsItem">
                  <small>Modelo:</small>
                  <input required id="model" onChange={changeValue} placeholder='Fusion'/>
                </div>
              </div>
              <div className="mainGarageBoxContentVehicleConfigsAll">
                <div className="mainGarageBoxContentVehicleConfigsItem">
                  <small>Ano:</small>
                  <input required id="year" onChange={changeValue} type="number" placeholder='2022'/>
                </div>
                <div className="mainGarageBoxContentVehicleConfigsItem">
                  <small>Portas:</small>
                  <input required id="doors" onChange={changeValue} type="number" placeholder='4'/>
                </div>
                <div className="mainGarageBoxContentVehicleConfigsItem">
                  <small>Passageiros:</small>
                  <input required id="passengers" onChange={changeValue} type="number" placeholder='5'/>
                </div>
                <div className="mainGarageBoxContentVehicleConfigsItem">
                  <small>Pneus:</small>
                  <input required id="tires" onChange={changeValue} type="number" placeholder='4'/>
                </div>
              </div>
              <button type='submit'>Adicionar veiculo para a garagem</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garage;
