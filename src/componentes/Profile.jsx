const Profile = () => {
  return (
    <div className="container text-center my-5">
      <div className="card mx-auto p-4" style={{ maxWidth: '400px' }}>
        <h1 className="mb-3">Mi Perfil</h1>
        
        <p className="fs-5">
          Email: <span className="fw-bold">tu@correo.com</span>
        </p>

        <button className="btn btn-danger mt-3">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;