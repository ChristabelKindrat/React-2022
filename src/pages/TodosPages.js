import React, {useEffect, useState} from 'react';
import TodoComponent from "../components/TodoComponent";


function TodosPages(props) {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodo([...value]);
            });
    }, []);

    return (<div>
            {todo.map(item => <TodoComponent item={item} key={item.id}/>)}
    </div>);
};

export default TodosPages;