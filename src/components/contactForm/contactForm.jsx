import React, { useState } from 'react';
import styles from './contactForm.module.css'; 

const FormularioContacto = () => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({
    nombre: false,
    correo: false,
    mensaje: false
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosFormulario(prevDatos => ({
      ...prevDatos,
      [name]: value
    }));
  };

  const validarFormulario = () => {
    const erroresLocal = {
      nombre: !datosFormulario.nombre,
      correo: !datosFormulario.correo,
      mensaje: !datosFormulario.mensaje,
    };
    setErrores(erroresLocal);
    return !Object.values(erroresLocal).includes(true); 
  };

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    
    if (validarFormulario()) {
      console.log('Formulario enviado con los siguientes datos:', datosFormulario);
      alert('Formulario enviado exitosamente');
     
    } else {
      console.log('Hay campos vacíos');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Formulario de Contacto</h2>
      <div>
        <label htmlFor="nombre" className={styles.formLabel}>Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosFormulario.nombre}
          onChange={manejarCambio}
          className={styles.formInput}
        />
        {errores.nombre && <p className={styles.error}>El nombre es obligatorio.</p>}
      </div>
      <div>
        <label htmlFor="correo" className={styles.formLabel}>Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={datosFormulario.correo}
          onChange={manejarCambio}
          className={styles.formInput}
        />
        {errores.correo && <p className={styles.error}>El correo es obligatorio.</p>}
      </div>
      <div>
        <label htmlFor="mensaje" className={styles.formLabel}>Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={datosFormulario.mensaje}
          onChange={manejarCambio}
          className={styles.formTextarea}
        />
        {errores.mensaje && <p className={styles.error}>El mensaje es obligatorio.</p>}
      </div>
      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
  );
};

export default FormularioContacto;
