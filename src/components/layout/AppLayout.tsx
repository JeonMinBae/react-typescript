import React from 'react';

export interface IAppLayoutProps {
    language: string,
    setLanguage() : void,
}

const AppLayout: React.FC<IAppLayoutProps> = (
    {
        language,
        setLanguage,
        children,
    }
) => {


    return (
        <div>
            <div>
                Header
            </div>
            {children}
            <div>
                Footer
            </div>
        </div>
    );
};

export default AppLayout;