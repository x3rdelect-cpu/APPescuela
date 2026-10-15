import { useState } from 'react';

const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {
    const [estado, setEstado] = useState(estadoInicial);

    // Color dinámico para el estado
    const badgeColor = estado === 'Matriculado' ? 'bg-success text-white' : 'bg-secondary text-white';

    const cambiarEstado = () => {
        setEstado(estado === 'Matriculado' ? 'Inactivo' : 'Matriculado');
    };

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100 border-0 card-alumno">
                {/* Cabecera de la tarjeta */}
                <div className="card-header bg-primary text-white text-center py-4">
                    <h4 className="card-title fw-bold mb-1 text-white">{nombre}</h4>
                    <span className="text-white-50 small fst-italic">{carrera}</span>
                </div>

                <div className="card-body d-flex flex-column justify-content-between p-4">
                    {/* Espacio limpio sin datos innecesarios */}
                    <div className="text-center my-3">
                        <p className="text-muted small mb-0">Sistema de Matrícula - SENATI</p>
                    </div>

                    <div className="mt-auto">
                        {/* Estado actual */}
                        <div className="text-center mb-3">
                            <span className={`badge px-3 py-2 fs-6 ${badgeColor}`}>{estado}</span>
                        </div>

                        {/* Botones de acción */}
                        <div className="d-grid gap-2">
                            <button 
                                className="btn btn-outline-primary btn-sm py-2"
                                onClick={cambiarEstado}
                            >
                                Cambiar Estado
                            </button>
                            <button className="btn btn-outline-danger btn-sm py-2">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumnoCard;