import React from 'react';
import { Link } from 'react-router-dom';

const CreacionCursos: React.FC = () => {
    return (
        <div className="text-center mt-5">
            <h1>Creación de Cursos</h1>
            {/* Aquí puedes agregar tu lógica y componentes para la creación */}
            <Link to="/">
                <button className="btn btn-danger m-2">Regresar al Menu</button>
            </Link>
        </div>
    );
};

export default CreacionCursos;
