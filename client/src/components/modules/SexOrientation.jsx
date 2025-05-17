import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { PieChart, Pie, Cell } from "recharts";
import "./section3.css";

const colorConfig = {
  Heterosexual: "#008000", // Green
  Homosexual: "#4B0082", // Purple
  Unspecified: "#808080", // Gray
};

const SexOrientation = (props) => {
  const [sexOrientation, setSexOrientation] = useState(props.sexOrientation);

  useEffect(() => {
    setSexOrientation(props.sexOrientation);
  }, [props.sexOrientation]);

  return (
    <>
      <div>
        <h2>Sexual Orientation</h2>
        <PieChart width={730} height={250}>
          <Pie
            label={({ name, value }) => `${name}: ${value}`}
            data={sexOrientation}
            dataKey="count"
            nameKey="value"
            innerRadius="25%"
            outerRadius="50%"
          >
            {sexOrientation.map((entry, index) => (
              <Cell fill={colorConfig[entry["value"]]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default SexOrientation;
