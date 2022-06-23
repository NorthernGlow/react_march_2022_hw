import React from 'react';

function UserDetails({user}) {
    return (
        <div>
            Name: {user.name} <br/>
            Username: {user.username} <br/>
            Email: {user.email}<br/>
            Phone: {user.phone}
        </div>
    );
}

export default UserDetails;