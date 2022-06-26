import {useEffect, useState} from "react";
import User from "./User";
import UserDetails from "./UserDetails";

export default function Users() {

    let [users, setUsers] = useState([])
    let [item, seItem] = useState({})


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });
    }, [])

    const choseUser = (item) => {
        seItem(item);
    }

    return (
        <div>
            {
                item.id && <UserDetails item={item}/>
            }
            {
                users.map(user => <div>
                    <User key={user.id}
                          user={user}
                          choseUser={choseUser}/>
                </div>)
            }
        </div>
    );
}

