import React from 'react';

function User({item,choseUser}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{
                choseUser(item.id)
            }}>Information</button>
        </div>
    );
}

export default User;