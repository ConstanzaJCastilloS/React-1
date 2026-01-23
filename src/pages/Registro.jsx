import {useState} from 'react';
import "../componentes/registro.css";


const Registro = () => {
  const [mail, setMail] = useState ("");
  const [pass, setPass] = useState ("");
  const [okpass, setOkpass] = useState ("");

  const [exito, setExito] = useState ("");
  const [error, setError] = useState ("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const revisionDatos = !mail.trim() || !pass.trim() || !okpass.trim();
    if (revisionDatos) {
        setError(alert("Todos los campos deben ser llenados, no puede dejar uno vacío"));
        return;
    }
    if (pass.length < 6 && okpass.length < 6) {
        setError(alert("La contraseña debe tener al menos 6 caracteres"));
        return;
    }
    const revisionPass = pass !== okpass;
    if (revisionPass) {
        setError(alert("La contraseña y la confirmación de ésta deben ser iguales"));
        return;
    }
    console.log("Datos válidos:", {revisionDatos});
    alert("Registro exitoso 🍕");

    setExito(true);
    setError(false);
    setMail("");
    setPass("");
    setOkpass("");
  };
  
    return (
    <>    
       <h1>Registro</h1>
      <form className="formulario"
        onSubmit={(e) => {handleSubmit(e)}}
      >
        <div className="form-group">
          <label>Mail</label>
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
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            onChange={(e) => setOkpass(e.target.value)}
            value={okpass}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
  
    </>
  );
};

export default Registro
