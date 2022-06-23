import React from 'react';

function Mission({item}) {
    if(item.launch_year !== '2020') {
        return (
            <div>
                <h2>Space mission - {item.flight_number}</h2>
                Name: {item.mission_name} <br/>
                Year: {item.launch_year} <br/>
                <img src={item.links.mission_patch_small} alt={item.mission_name}/>
                <hr/>

            </div>
        );
    }
}

export default Mission;