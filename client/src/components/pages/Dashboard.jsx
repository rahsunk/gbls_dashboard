import React, { useState, useEffect, useContext } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
// import { useOutletContext } from "react-router-dom";
// import { get, post } from "../../utilities";

import "../../utilities.css";
import "./Dashboard.css";
import { UserContext } from "../App";
import Languages from "../modules/Laguages.jsx";
import Cities from "../modules/Cities.jsx";
import Veterans from "../modules/Veterans.jsx";
import Disabled from "../modules/Disabled.jsx";
import DV from "../modules/DV.jsx";
import EthnicityGender from "../modules/EthnicityGender.jsx";

// Dummy data:
import { people, getTopFieldValues } from "../modules/data.js";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [veterans, setVeterans] = useState([]);
  const [disabled, setDisabled] = useState([]);
  const [dv, setDV] = useState([]);
  const [cities, setCities] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    setData(people);
    setLanguages(getTopFieldValues(people, "Language"));
    setVeterans(getTopFieldValues(people, "Veteran"));
    setDisabled(getTopFieldValues(people, "Disabled"));
    setDV(getTopFieldValues(people, "DV"));
    setCities(getTopFieldValues(people, "City"));
    setEthnicities(getTopFieldValues(people, "Ethnicity"));
    setGenders(getTopFieldValues(people, "Gender"));
  }, []);

  return (
    <>
      <h1>This Year's Clients</h1>
      <Languages languages={languages} />
      <Cities topCities={cities} />
      <Veterans veterans={veterans} />
      <Disabled disabled={disabled} />
      <DV dv={dv} />
      <EthnicityGender />
    </>
  );
};

export default Dashboard;
