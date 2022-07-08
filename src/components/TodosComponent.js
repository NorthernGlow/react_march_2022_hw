import React, {useEffect, useState} from 'react';
import {getTodos} from "../services/all.api.service";
import TodoComponent from "./TodoComponent";

function TodosComponent(props) {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(({data}) => setTodos([...data]));
    }, [])

    return (
        <div>
            Todos:
            {
                todos.map((value, index) => <TodoComponent
                    key={index}
                    item={value}/>)
            }
        </div>
    );
}

export default TodosComponent;