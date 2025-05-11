import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { getGenderCountByEthnicity } from "../modules/data.js";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const EthnicityGender = (props) => {
  const [genderStats, setGenderStats] = useState(getGenderCountByEthnicity(props.people));

  return (
    <>
      <h2>Clients by Race and Gender</h2>
      {/* {genderStatList} */}
      <BarChart width={730} height={250} data={genderStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ethnicity" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Female" fill="#008000" />
        <Bar dataKey="Male" fill="#4B0082" />
        <Bar dataKey="Other" fill="#808080" />
      </BarChart>
    </>
  );
};

export default EthnicityGender;
