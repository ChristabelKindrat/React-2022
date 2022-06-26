export default function User({user,choseUser}) {
    return (
        <div>
            {user.id} {user.name}
            <button onClick={()=>{choseUser(user)}}>Details</button>
        </div>);
}