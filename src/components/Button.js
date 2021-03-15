import React from 'react';

const Button = ({randomizeJoke})=>{
    return(
        <button className="btn btn-primary" onClick={randomizeJoke}>View Random Jokes</button>

    )
}


export default Button;