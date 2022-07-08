import React from 'react';
import {useForm} from "react-hook-form";
import {createUser} from "../services/all.api.service";

function User(props) {
    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name'
        }
    });

    const submit = (value) => {
        createUser(value).then(result => console.log(result))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/> name <br/>
                {
                    errors.name && <span>field is required<br/></span>
                }
                <input type="text" {...register('username')}/> username <br/>
                <input type="text" {...register('email', {required: true})}/> email <br/>
                {
                    errors.email && <span>field is required<br/></span>
                }
                <input type="text" {...register('phone')}/> phone<br/>
                <input type="text" {...register('website')}/> website<br/>
                address: <br/>
                <input type="text" {...register('address.street')}/> street<br/>
                <input type="text" {...register('address.suite')}/> suite<br/>
                <input type="text" {...register('address.city')}/> city<br/>
                <input type="text" {...register('address.zipcode')}/> zipcode<br/>
                <input type="text" {...register('address.geo.lat')}/> lat<br/>
                <input type="text" {...register('address.geo.lng')}/> lng<br/>

                company:<br/>
                <input type="text" {...register('company.name')}/> name<br/>
                <input type="text" {...register('company.catchPhrase')}/> catchPhrase<br/>
                <input type="text" {...register('company.bs')}/> bs<br/>
                <button>save</button>
            </form>
        </div>
    );
}

export default User;