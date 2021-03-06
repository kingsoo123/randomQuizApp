import React, {useState} from "react";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

const Categories = ({jokes}) => {
let history = useHistory();

const jokeComponent = jokes.map((joke, i)=>{
    return(
       <div className="card mt-2" style={{width: "18rem"}} key={i}>
        <div className="card-body">
          <h5 className="card-title"> {joke?.category} Category</h5>
          <p className="card-text">
          {joke?.joke} 
          </p>
          <button className="btn btn-outline-primary" onClick={()=>{history.push(`/secondary/${joke?.category}`)}}>View Joke</button>
        </div>
      </div>
    )
})

const loader = <Loader
type="Puff"
color="#00BFFF"
height={100}
width={100}
timeout={3000} //3 secs
/>
  return (
    <>
        {jokes.length === 0 ? loader : jokeComponent}
    </>
  );
};

export default Categories;
