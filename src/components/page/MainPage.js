import React, { useState } from "react";
import Categories from "../Categories";
import Button from "../Button";
import warning from "../../assets/warning.png";

const MainPage = () => {
  const [param, setParam] = useState([])

  const [jokes, setJokes] = useState(["No matching Joke found"]);
  const [errorMessage, setErrorMessage] = useState("");
  
  console.log(param);

const handleSpooky = (e) => {
    const isSpooky = e.target.checked;
    if (isSpooky === true) {
      setParam(param.concat("Spooky"));
    }else if(isSpooky === false){
      for( var i = 0; i < param.length; i++){ 
        if ( param[i] === "Spooky") { 
           param.splice(i, 1); 
        }   
    }    }
  };

  const handleMisc = (e) => {
    const isMisc = e.target.checked;
    if (isMisc === true) {
      setParam(param.concat("Misc"));
    }else if(isMisc === false){
      for( var i = 0; i < param.length; i++){ 
        if ( param[i] === "Misc") { 
           param.splice(i, 1); 
        }   
    }    }
  };

  const handleProgramming = (e) => {
    const isProgramming = e.target.checked;
    if (isProgramming === true) {
      setParam(param.concat("Programming"));
    }else if(isProgramming === false){
      for( var i = 0; i < param.length; i++){ 
        if ( param[i] === "Programming") { 
           param.splice(i, 1); 
        }   
    }    }
  };

  const handleChristmas = (e) => {
    const isChristmas = e.target.checked;
    if (isChristmas === true) {
      setParam(param.concat("Christmas"));

    }else if(isChristmas === false){
      for( var i = 0; i < param.length; i++){ 
        if ( param[i] === "Christmas") { 
           param.splice(i, 1); 
        }   
    }    }
  };
  const handleDark = (e) => {
    const isDark = e.target.checked;
    if (isDark === true) {
      setParam(param.concat("Dark"));

    }else if(isDark === false){
      for( var i = 0; i < param.length; i++){ 
        if ( param[i] === "Dark") { 
           param.splice(i, 1); 
        }   
    }    }
  };

  const handlePun = (e) => {
    const isPun = e.target.checked;
    if (isPun === true) {
      setParam(param.concat("Pun"));

    }else if(isPun === false){
      for( var i = 0; i < param.length; i++){ 
        if ( param[i] === "Pun") { 
           param.splice(i, 1); 
        }   
    }
    }
  };

  
 


  const randomizeJoke = () => { 
    let urlParams;
  if(param.length === 0){
    urlParams = 'Any'
  }else{
    urlParams = param.toString()
  }
    fetch(
      `https://v2.jokeapi.dev/joke/${urlParams}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-300&amount=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setJokes(data?.jokes.sort( () => .5 - Math.random() ));
        setErrorMessage(data.error);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div
        className="col-md-12 col-sm-12 pb-1"
        style={{ background: "#0069D9" }}
      >
        <h1 className="text-center">Welcome to Randomize Jokes</h1>
        <div>
          <img src={warning} width="50" height="50" />
          <small>We do not allow NSFW, religious, racist or sexist jokes</small>
        </div>
      </div>
      <div className="p-3 row d-flex justify-content-around">
        <Categories jokes={jokes} />
      </div>
      <div className="d-flex justify-content-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handleProgramming}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Programming
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handleMisc}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Misc
          </label>
        </div>
        

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handleSpooky}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Spooky
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handleDark}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Dark
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handleChristmas}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Christmas
          </label>
        </div>


        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={handlePun}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Pun
          </label>
        </div>
      </div>
 
      <div className="d-flex justify-content-center p-4">
        <Button randomizeJoke={randomizeJoke} />
      </div>
    </>
  );
};

export default MainPage;
