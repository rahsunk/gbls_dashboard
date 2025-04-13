import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import "./Cities.css";

const Cities = (props) => {
  const [cities, setCities] = useState(props.topCities);

  useEffect(() => {
    setCities(props.topCities);
  }, [props.topCities]);

  let citiesList = cities.map((cityObj) => (
    <>
      <tr>
        <th scope="row">{cityObj["value"]}</th>
        <td>{cityObj["count"]}</td>
      </tr>
    </>
  ));

  return (
    <>
      <h2>Top 8 Cities by Number of Clients</h2>
      {/* <div>{citiesList}</div> */}
      <table>
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Clients</th>
          </tr>
        </thead>
        <tbody>{citiesList}</tbody>
      </table>
    </>
  );
};

export default Cities;
