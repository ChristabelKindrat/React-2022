import {useForm} from "react-hook-form";

export default function App() {
    const {register, handleSubmit} = useForm()
    const submit = (obj) => {

        fetch("http://jsonplaceholder.typicode.com/comments", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj),
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => console.log(result));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('body')}/>
                <input type='text' {...register('name')} />
                <button>save</button>
            </form>
        </div>
    );
}

