import React, {useEffect, useState} from 'react';
import Mission from "../Mission/Mission";

function Missions() {
    let [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                setMissions(value);
            })
    }, [])
    return (
        <div>
            {
                missions.map((mission, index) => <Mission
                    key={index}
                    item={mission}/>
                )
            }
        </div>
    );
}

export default Missions;