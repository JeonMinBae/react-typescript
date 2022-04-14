import React from 'react';
// import 'scss/loader.scss'

export interface ILoaderProps {

}

const Loader: React.FC<ILoaderProps> = () => {
    return (
        <div className={"spinner"}>
            <div className={'loading over'}>
                <span>Loading...</span>
                <div className="half-spinner"></div>
            </div>
        </div>
    );
};

export default Loader;