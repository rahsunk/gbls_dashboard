import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import "./section2.css";

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
      <div>
        <h2>Top 8 Cities by Number of Clients</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Clients</th>
            </tr>
          </thead>
          {/* Just getting the top 8 cities below */}
          <tbody>{citiesList.slice(0, 8)}</tbody>
        </table>
      </div>
    </>
  );
};

export default Cities;
