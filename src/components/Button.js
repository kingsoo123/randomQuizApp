import React from 'react';

const Button = ({randomizeJoke, name})=>{
    return(
        <button className="btn btn-primary" onClick={randomizeJoke}>Randomize {name} Jokes</button>

    )
}


export default Button;