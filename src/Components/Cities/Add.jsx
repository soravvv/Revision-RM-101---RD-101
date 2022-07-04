import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addData, getData } from "../Redux/action";

export const Add = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();

  const addNewDetails = () => {
    addData({
      country: country,
      city: city,
      population: population,
      dispatch: dispatch,
    }).then(() => {
      getData(dispatch);
    });
  };

  return (
    <div>
      <h3>
        Country Name :{" "}
        <input
          type="text"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          placeholder="Please Enter Country Name"
        />
      </h3>
      <h3>
        City Name :{" "}
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Please Enter City Name"
        />
      </h3>
      <h3>
        Population :{" "}
        <input
          type="text"
          onChange={(e) => {
            setPopulation(e.target.value);
          }}
          placeholder="Please Enter Polpulation"
        />
      </h3>
      <button
        onClick={() => {
          addNewDetails();
        }}
      >
        Add Details
      </button>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};
