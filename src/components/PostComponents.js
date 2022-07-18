export default function PostComponents({item}) {
    return (
        <div>
            <h3>{item.id}</h3>
            <p>{item.body}</p>
            <p>{item.title}</p>
        </div>
    );
}