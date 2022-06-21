
function Simpsons(props) {
    let {name,info,image} = props
    return(
        <div>
            <h2>{name}</h2>
            <p>{info}</p>
            <img src={image} alt=''/>
        </div>
    )
}

export default Simpsons;