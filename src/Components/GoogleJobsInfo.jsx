import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const GoogleJobsInfo = () => {
  const [dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios("http://localhost:8080/data", {
      method: "GET",
      params: {
        per_page: 5,
      },
    })
      .then((res) => {
        setLoading(false);
        setDataa(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(false);
      });
  }, [page]);

  console.log(dataa);

  return (
    <div className="container">
      <div>
        <h1>
          <u>Google Jobs Info</u>
        </h1>
      </div>
      {loading && <h1>...Loading</h1>}
      {error && <h1>...Error</h1>}
      <br />
      <br />
      {dataa.map((e) => (
        <div className="minicontainer">
          <hr />
          <div>
            <img src={e.image} alt="Image Error" />
          </div>
          <div>
            <p>Job Title : {e.job_title}</p>
            <p>Company : {e.company}</p>
            <p>Location : {e.location}</p>
            <p>Posted : {e.posted}</p>
            <p>Duration : {e.duration}</p>
          </div>
          <Link to="/applied">
            <button>Apply</button>
          </Link>
        </div>
      ))}
      <hr />
      <br />
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <br />
      <br />
    </div>
  );
};
