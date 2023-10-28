import React from "react";
import { useState } from "react";

const Count = function (){
    const[likes, setlikes] = useState(5)
    const[value, setValue] = useState('uuuu')

    function plus(){
        setlikes(likes+1)
    }

    function minus(){
        setlikes(likes-1)
    }

    return (
        <div className="Counter">
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={plus}>like</button>
            <button onClick={minus}>dislike</button>
        </div>
    );
}

export default Count;