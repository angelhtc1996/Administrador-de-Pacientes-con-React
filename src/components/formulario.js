import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

  //Crear State de citas
  const [citas, actualizarCitas] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    descripcion: '',
  })

  // Crear state para error
  const [error, actualizarError] = useState(false)


  //Function para actualizar los estados de los elementos
  const actualizarState = e => {
    //Verificar si el evento escribe lo que el cliente realiza
    // console.log(e.target.value);
    actualizarCitas({
      ...citas,
      [e.target.name]: e.target.value
    })
  }
  //Extraer Valores
  const { mascota, propietario, fecha, hora, descripcion } = citas;

  //Cuando el usuario agraga una cita
  const submitCita = e => {
    e.preventDefault();

    //Validar formulario
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
      hora.trim() === '' || descripcion.trim() === '') {
      actualizarError(true);
      return;
    }

    //Eliminar mensaje previo
    actualizarError(false);

    //Asignar ID
    citas.id = uuid();

    //Crear cita
    crearCita(citas);

    //Reiniciar el formulario 
    actualizarCitas({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      descripcion: ''
    })



  }


  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={actualizarState}
          value={propietario}
        />


        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Descripcion</label>
        <textarea
          name="descripcion"
          className="u-full-width"
          placeholder="Describe los sintomas"
          onChange={actualizarState}
          value={descripcion}
        />

        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar citas</button>
      </form>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;