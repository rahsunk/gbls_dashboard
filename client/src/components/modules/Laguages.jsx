import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Cell, Bar } from "recharts";

const colorConfig = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#4B0082", "#800080"];

const Languages = (props) => {
  const [languages, setLanguages] = useState(props.languages);

  useEffect(() => {
    setLanguages(props.languages);
    console.log(languages);
  }, [props.languages]);

  return (
    <>
      <h2>Clients by Language</h2>
      <BarChart width={730} height={250} data={languages}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="value" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#008000">
          {languages.map((entry, index) => (
            <Cell fill={colorConfig[index % 7]} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default Languages;
