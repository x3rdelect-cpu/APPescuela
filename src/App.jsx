import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import AlumnoCard from "./components/AlumnoCard";
import Footer from "./components/Footer/Footer";
import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* Barra de navegación superior con el título exacto y botón */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="container my-5 flex-fill">
        <h2 className="mb-4 text-dark fw-bold">Directorio de Alumnos</h2>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Daniel Puccio" 
              carrera="Desarrollo de Software" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Maria Perez" 
              carrera="Diseño Gráfico" 
              estadoInicial="Inactivo" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Carlos Mendoza" 
              carrera="Administración Industrial" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Juan Perez" 
              carrera="Gastronomia" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Ismael Reyes" 
              carrera="Catador de Vinos" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Flora Arismendi" 
              carrera="Diseño y Producción" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Marlon Matews" 
              carrera="Ciberseguridad" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Alonzo Manenfield" 
              carrera="Boxeador" 
              estadoInicial="Matriculado" 
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <AlumnoCard 
              nombre="Caita Pereira" 
              carrera="Diseño Grafico" 
              estadoInicial="Matriculado" 
            />
          </div>
        </div>
      </main>

      {/* Contador interactivo y Pie de página */}
      <div className="container text-center my-4">
        <Contador />
      </div>
      <Footer />
    </div>
  );
}

export default App;