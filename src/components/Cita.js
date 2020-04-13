import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>Mascota: <span>{cita.mascota}</span></p>
    <p>Dueño: <span>{cita.propietario}</span></p>
    <p>Fecha de la cita: <span>{cita.fecha}</span></p>
    <p>Hora de la cita: <span>{cita.hora}</span></p>
    <p>Sintomas: <span>{cita.descripcion}</span></p>



    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
 </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}


export default Cita;