import React from 'react';

function TodoComponent({item}) {
    return (
        <div>
            <ul>
                <li>
                    {item.title}
                </li>
            </ul>
        </div>
    );
}

export default TodoComponent;