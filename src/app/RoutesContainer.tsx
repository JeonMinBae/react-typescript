import React, {useMemo} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import routes from "../routing/routes";

export interface IRoutesContainerProps {
    role: string,
};

const RoutesContainer = ({role}: IRoutesContainerProps) => {


    const roleRoutes = useMemo(() =>
        routes.filter(({roles}) => !roles.length || roles.includes(role)), [role]
    );
    console.log('roleRoutes', roleRoutes)
    return (
        <BrowserRouter>
            <Routes>
                {roleRoutes.map(({path, component}) => (
                    <Route key={path} path={path} element={component}/>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesContainer;