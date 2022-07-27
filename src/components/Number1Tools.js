import React from 'react';
import {useDispatch} from "react-redux";
import {number1Actions} from "../redux";

function Number1Tools() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{dispatch(number1Actions.inc())}}>inc</button>
            <button onClick={()=>{dispatch(number1Actions.dec())}}>dec</button>
            <button onClick={()=>{dispatch(number1Actions.res())}}>res</button>
        </div>
    );
}

export {Number1Tools};