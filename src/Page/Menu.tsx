import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return (
        <div className="text-center mt-5">
            <h1>Menu Principal</h1>
            <Link to="/consulta-alumnos">
                <button className="btn btn-primary m-2">Consulta de Alumnos</button>
            </Link>
            <Link to="/creacion-cursos">
                <button className="btn btn-secondary m-2">Creación de Cursos</button>
            </Link>
        </div>
    );
};

export default Menu;

