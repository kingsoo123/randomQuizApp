import React, { useEffect, useState } from "react";
import Button from "../Button";


const Secondary = (props) => {
  const [category, setCategory] = useState("");
  const [jokes, setJokes] = useState(['No matching Joke found'])
  console.log(jokes);
  useEffect(() => {
    setCategory(props?.match?.params?.category);
  }, []);

  useEffect(()=>{
    fetch(
      `https://v2.jokeapi.dev/joke/${props?.match?.params?.category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-300&amount=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setJokes(data?.jokes);
      })
      .catch((error) => console.log(error));
  },[])

  const secPageJokes = jokes.map((joke, i)=>{
    return(
      <div key={i}>

      <div class="card">
        <div class="card-header">Type: {joke?.type}</div>
        <div class="card-body">
          <p class="card-text">
         {joke?.joke}
          </p>
          <a href="#" class="btn btn-outline-primary">
           {joke?.lang ? 'English' : null}
          </a>
        </div>
      </div>

      </div>
    )
  })


  const randomizeJoke = ()=>{
    fetch(
      `https://v2.jokeapi.dev/joke/${props?.match?.params?.category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-300&amount=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setJokes(data?.jokes.sort( () => .5 - Math.random() ));
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div
        className="col-md-12 col-sm-12 pb-1"
        style={{ background: "#0069D9" }}
      >
        <h1 className="text-center">{category} Jokes</h1>
      </div>

     {secPageJokes}

     <div className="d-flex justify-content-center p-4">
        <Button randomizeJoke={randomizeJoke} name = {props?.match?.params?.category}/>
      </div>
    </>
  );
};

export default Secondary;