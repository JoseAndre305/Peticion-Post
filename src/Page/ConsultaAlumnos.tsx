import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConsultaAlumnos: React.FC = () => {
    const [nombre, setNombre] = useState<string>('');
    const [creditos, setCreditos] = useState<number | ''>('');
    const [descripcion, setDescripcion] = useState<string>('');

    const handleSearch = () => {
        //debe ir la consulta de la API
    };

    const handleClear = () => {
        setNombre('');
        setCreditos('');
        setDescripcion('');
    };

    return (
        <div className="text-center mt-5">
            <h1>Consulta de Alumnos</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="creditos" className="form-label">Créditos</label>
                    <input
                        type="number"
                        className="form-control"
                        id="creditos"
                        value={creditos}
                        onChange={(e) => setCreditos(Number(e.target.value))}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary m-2" onClick={handleSearch}>
                    Buscar
                </button>
                <button type="button" className="btn btn-secondary m-2" onClick={handleClear}>
                    Limpiar
                </button>
            </form>
            <Link to="/">
                <button className="btn btn-danger m-2">Regresar al Menu</button>
            </Link>
        </div>
    );
};

export default ConsultaAlumnos;


