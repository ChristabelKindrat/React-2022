export default function User({item, elevate}) {

    const onclick = () => {
        elevate(item.id);
    }
    return (<div>
        <div>{item.name} <br/>{item.username}<br/>{item.email}</div>
        <button onClick={onclick}>Posts
        </button>
        <hr/>
    </div>)

}