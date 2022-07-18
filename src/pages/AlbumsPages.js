import React, {useEffect, useState} from 'react';
import AlbumsComponents from "../components/AlbumsComponents";

function AlbumsPages(props) {

    const [albums,setAlbums]=useState([])
    useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/albums')
        .then(value => value.json())
        .then(value => {
            setAlbums([...value])

        })

    },[])


    return (
        <div>
            {albums.map(value => <AlbumsComponents item={value} key={value.id}/>)}
        </div>
    );
}

export default AlbumsPages;