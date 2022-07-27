import React from 'react';
import {useSelector} from "react-redux";

function Show() {

    const {number1} = useSelector(state => state.number1Reducer);

    return (
        <div>
            <h1>number1:{number1}</h1>
        </div>
    );
}

export {Show};