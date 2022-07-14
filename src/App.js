import {useForm} from "react-hook-form";

export default function App() {


    const {register, handleSubmit} = useForm()

    let submit = (obj) => {

        fetch("http://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj),
        })
            .then(response => response.json())
            .then(result => console.log(result));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('title')}/>
                <input type='text' {...register('body')} />
                <button>save</button>
            </form>
        </div>
    );
}