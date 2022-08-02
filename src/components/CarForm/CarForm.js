import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carAction} from "../../redux/slices";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {carForUpdate, errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate,setValue])

    async function submit(data) {
        if (carForUpdate) {
            await dispatch(carAction.updateById({id: carForUpdate.id, car: data}))
        } else {
            await dispatch(carAction.createCar({car: data}))
        }
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate ? 'Update' : 'Create'}</button>
                {
                    errors && <div>{JSON.stringify(errors)}</div>
                }
            </form>
        </div>
    );
};

export {CarForm};