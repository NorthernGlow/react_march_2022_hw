import React from 'react';
import {useDispatch} from "react-redux";

import {carAction} from "../../redux/slices";

const Car = ({car}) => {
    const {id,model,year,price} = car;

    const dispatch = useDispatch();
    return (
        <div>
            <div>{id} - {model}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={()=>dispatch(carAction.setCarForUpdate(car))}>updateCar</button>
            <button onClick={()=>dispatch(carAction.deleteById({id}))}>Delete</button>
            <hr/><hr/>
        </div>
    );
};

export {Car};