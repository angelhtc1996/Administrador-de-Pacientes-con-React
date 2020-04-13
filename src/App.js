import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/formulario';
import Cita from './components/Cita';

function App() {


  //Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas 
  const [citas, guardarCitas] = useState([citasIniciales]);


  // Use effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);


  //Function que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //Function que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);

  }

  //Mostrar mensaje condicional
  const titulo = citas.length === 0 ? 'Por favor ingrese una cita' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
