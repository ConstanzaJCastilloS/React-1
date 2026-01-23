import React, { useState } from 'react'
import "../componentes/registro.css";

const Login = () => {
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const [exito, setExito] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkDatos = !mail.trim() || !pass.trim();
        if (checkDatos) {
            setError(
                alert("Todos los campos deben ser llenados, no puede dejar uno vacío")
            );
            return;
        }
        if (pass.length < 6) {
            setError(alert("El password debe tener al menos 6 caracteres"));
            return;
        }
        console.log("Datos válidos:", { checkDatos });
        alert("Login exitoso 🍕");

        setExito(true);
        setError(false);
        setMail("");
        setPass("");
    };

  return (
      <>
      <h1>Login</h1>
      <form className="formulario"
        onSubmit={(e) => {handleSubmit(e)}}
      >
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Login
