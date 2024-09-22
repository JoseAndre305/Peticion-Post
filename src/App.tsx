import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Page/Menu';
import ConsultaAlumnos from './Page/ConsultaAlumnos';
import CreacionCursos from './Page/CreacionCursos';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/consulta-alumnos" element={<ConsultaAlumnos />} />
            <Route path="/creacion-cursos" element={<CreacionCursos />} />
        </Routes>
    );
};

export default App;


