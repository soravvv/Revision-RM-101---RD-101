import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { Link } from "react-router-dom";

export const Cities = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    getData(dispatch);
  });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Details
      </h1>
      <table className="app">
        <th>id</th>
        <th>Country</th>
        <th>City</th>
        <th>Population</th>
        <th>Edit</th>
        <th>Delete</th>
        {data.map((e) => (
          <tbody className="gap" key={e.id}>
            <tr>
              <th>{e.id}</th>
              <th>{e.country}</th>
              <th>{e.city}</th>
              <th>{e.population}</th>
              <th>
                <button>Edit</button>
              </th>
              <th>
                <button>Delete</button>
              </th>
            </tr>
          </tbody>
        ))}
        <Link to="/add-country-city">
          <button>Add New Details</button>
        </Link>
      </table>
    </>
  );
};
