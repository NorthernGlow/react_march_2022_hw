import React, {useEffect, useState} from 'react';
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";

function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, [])

    const choseUser = (item) => {
        setUser(item);
    }

    return (
        <div>
            {
                user.id && <UserDetails user={user}/>
            }
            {
                users.map((user, index) => <User
                    key={index}
                    item={user}
                    choseUser={choseUser}
                />)
            }

        </div>

    );
}

export default Users;