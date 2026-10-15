function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4 py-3 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1 fs-4">Sistema de Matrícula - SENATI</span>
        <button className="btn btn-outline-light btn-sm px-3">Cerrar Sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;