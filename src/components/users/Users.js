import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {getUsers} from "../../services/user.api.service";

function Users({choseUser}) {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, [])

    return (
        <div>
            {
                users.map((value, index) => <User
                    choseUser={choseUser}
                    key={index}
                    item={value}/>)
            }
        </div>
    );
}

export default Users;