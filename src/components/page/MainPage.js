import React, { useState, useEffect } from "react";
import Categories from "../Categories";
//import { ApiTrigger } from "../../service";
import Button from "../Button";
import warning from "../../assets/warning.png";

const MainPage = () => {
  const [programming, SetProgramming] = useState('');
  const [misc, setMisc] = useState('')
  const [dark, setDark] = useState('')
  const [spooky, setSpooky] = useState('')
  const [christmas, SetChristmas] = useState('')
  const [pun, setPun] = useState('')
  //const [param, setParam] = useState([])

  const [jokes, setJokes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //console.log(jokes);

  let parameters = []
  parameters.push(dark, programming, pun, spooky, christmas, misc)

  //console.log(parameters);
  let newParam = parameters.join(',')
  console.log(newParam);


  const handleSpooky = (e) => {
    const isSpooky = e.target.checked;
    if (isSpooky === true) {
      setSpooky("Spooky");
    }
  };

  const handleMisc = (e) => {
    const isMisc = e.target.checked;
    if (isMisc === true) {
      setMisc("Misc");
    }
  };

  const handleProgramming = (e) => {
    const isProgramming = e.target.checked;
    if (isProgramming === true) {
      SetProgramming("Programming");
    }
  };

  const handleChristmas = (e) => {
    const isChristmas = e.target.checked;
    if (isChristmas === true) {
      SetChristmas("Christmas");
    }
  };
  const handleDark = (e) => {
    const isDark = e.target.checked;
    if (isDark === true) {
      setDark("Dark");
    }
  };

  const handlePun = (e) => {
    const isPun = e.target.checked;
    if (isPun === true) {
      setPun("Pun");
    }
  };


  const randomizeJoke = () => {
    fetch(
      `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-300&amount=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
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
      </div>
      <div className="d-flex justify-content-center">
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
      </div>
      <div className="d-flex justify-content-center">
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
      </div>
      <div className="d-flex justify-content-center">
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
      </div>
      <div className="d-flex justify-content-center">
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
      </div>{" "}
      <div className="d-flex justify-content-center">
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
