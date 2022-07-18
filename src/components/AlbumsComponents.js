import React from 'react';

function AlbumsComponents({item}) {
    return (
        <div>
            <ul>
                <li>{item.title} </li>
            </ul>
        </div>
    );
}

export default AlbumsComponents;