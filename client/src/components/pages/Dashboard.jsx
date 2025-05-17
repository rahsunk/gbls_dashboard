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
import SexOrientation from "../modules/SexOrientation.jsx";
import Filter from "../modules/Filter.jsx";

// Dummy data from https://docs.google.com/spreadsheets/d/1mG9ChXcHKXjQCDXWVJccEG130tbclYFHBptU7ewrdFk/edit?gid=0#gid=0
import { getData, getTopFieldValues } from "../modules/data.js";

const sheetID = "1mG9ChXcHKXjQCDXWVJccEG130tbclYFHBptU7ewrdFk";
const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

const people = await getData(sheetURL);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [veterans, setVeterans] = useState([]);
  const [disabled, setDisabled] = useState([]);
  const [dv, setDV] = useState([]);
  const [sexOrientation, setSexOrientation] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setData(people);
    setLanguages(getTopFieldValues(people, "language"));
    setVeterans(getTopFieldValues(people, "veteran"));
    setDisabled(getTopFieldValues(people, "disabled"));
    setDV(getTopFieldValues(people, "DV"));
    setSexOrientation(getTopFieldValues(people, "sexOrientation"));
    setCities(getTopFieldValues(people, "city"));
  }, []);

  return (
    <>
      <div id="section1">
        <img src="../../../gblsLogo.png" width="400" />
        <h1>This Year's Clients</h1>
        <Filter people={people} />
      </div>
      <hr />
      <div id="section2">
        <Languages languages={languages} />
        <Cities topCities={cities} />
      </div>
      <hr />
      <div id="section3">
        <Veterans veterans={veterans} />
        <Disabled disabled={disabled} />
        <DV dv={dv} />
        <SexOrientation sexOrientation={sexOrientation} />
      </div>
      <hr />
      <div id="section4">
        <EthnicityGender people={people} />
      </div>
    </>
  );
};

export default Dashboard;
