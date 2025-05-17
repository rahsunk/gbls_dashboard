import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Bar,
} from "recharts";
import "./section2.css";

const colorConfig = [
  "#FF0000", // red
  "#FFA500", // orange
  "#FFFF00", // yellow
  "#008000", // green
  "#0000FF", // blue
  "#4B0082", // indigo
  "#800080", // purple
  "#808080", // gray (other)
];

const Languages = (props) => {
  const [languages, setLanguages] = useState(props.languages);

  useEffect(() => {
    if (props.languages.length > 7) {
      /*
      If there are more than 7 unique languages, creates an "Other" bar
      that counts all of the clients with languages after the 7 most common
      */
      let other = { value: "Other", count: 0 };
      for (let i = 7; i < props.languages.length; i++) {
        other.count += props.languages[i].count;
      }
      setLanguages(props.languages.slice(0, 7).concat([other]));
    } else {
      setLanguages(props.languages.slice());
    }
  }, [props.languages]);

  return (
    <>
      <div>
        <h2>Clients by Language</h2>
        <BarChart width={730} height={250} data={languages}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#008000">
            {languages.map((entry, index) => (
              <Cell fill={colorConfig[index % 8]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default Languages;
