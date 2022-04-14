import React, {useEffect, useState} from 'react';
import UserService from "../modules/user/service/UserService";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import {GET_USER, GET_USERS, getUsers} from "../redux/user/user.module";
import configureStore from "../redux/configureStore";

export interface IHomeProps {

}

const Home : React.FC<IHomeProps> = () => {

    const users = useSelector((state: RootState ) => state.user.response );
    const error = useSelector((state: RootState ) => state.user.error );
    const loading = useSelector((state: RootState ) => state.loading );

    const [data, setData] = useState('empty');

    const test = () => {
        console.log('users', users);
        console.log('error', error);
        console.log('loading', loading);

    }


    return (
        <div>
            Home
            <button onClick={() => UserService.getUsers()
                .then(res => {
                    console.log('res', JSON.stringify(res))
                    setData(() => JSON.stringify(res))
                })
                .catch(error => setData(() => "ERROR"+JSON.stringify(error)))}
            >get users</button>
            <p style={{fontSize: '20px', color: 'gray', margin: '100px'}}>
                {data}
            </p>
            <button onClick={() => test()}>sdfsdfsdfsdfsdf</button>
        </div>
    );
};

export default Home;