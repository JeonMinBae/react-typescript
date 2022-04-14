import RoutesContainer from './RoutesContainer';
import AppLayout from '../components/layout/AppLayout';
import Loader from '../components/layout/Loader';
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers";

/**
 * This is the main entry app component. Here we wll define the actual app layout
 * and locale provider
 *
 */

export interface IAppContainerProps {
}

const AppContainer : React.FC<IAppContainerProps> = (
    {
    }
) => {
    const loading = false;
    const language = useSelector((state : RootState) => state.language.language);
    const role = useSelector((state : RootState) => state.auth.role);

    return (
        <>
            {loading && <Loader/>}
            <AppLayout
                language={language}
                setLanguage={()=>{}}
            >
                <RoutesContainer role={role}/>
            </AppLayout>
        </>
    );
};

export default AppContainer;