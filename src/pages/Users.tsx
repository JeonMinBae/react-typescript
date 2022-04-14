import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IUserProps {

};

const Users : React.FC<IUserProps> = () => {

    const navigate = useNavigate();

    return (
        <div>
            USERS
            <button onClick={() => navigate('/')}>To Home</button>
        </div>
    );
};

export default Users;