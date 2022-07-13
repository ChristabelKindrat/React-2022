import axios from "axios";
import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../servises/user.api.service";

export default function Users(elevate) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            {users.map(value => <User item={value} key={value.id} elevate={elevate}/>)}
        </div>
    )
}
