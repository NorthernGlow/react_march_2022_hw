import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {createComment, createUser, getPosts} from "../services/all.api.service";

function Comment(props) {
    let {handleSubmit, register, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name'
        }
    });

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    }, []);

    const submit = (value) => {
        createComment(value).then(result => console.log(result))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})} /> name <br/>
                {
                    errors.name && <span>field is required<br/></span>
                }
                <input type="text" {...register('email')} /> email <br/>
                <input type="text" {...register('body')} /> body<br/>
                <select {...register('postId')}>
                    {
                        posts.map(value => <option key={value.id} value={value.id}>{value.id}</option>)
                    }
                </select> <br/>
                <button>save</button>
            </form>

        </div>
    );
}

export default Comment;