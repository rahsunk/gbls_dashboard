import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { PieChart, Pie, Cell } from "recharts";
import "./section3.css";

const colorConfig = {
  Yes: "#008000", // Green
  No: "#4B0082", // Purple
  Unspecified: "#808080", // Gray
};

const Disabled = (props) => {
  const [disabled, setDisabled] = useState(props.disabled);

  useEffect(() => {
    setDisabled(props.disabled);
  }, [props.disabled]);

  return (
    <>
      <div>
        <h2>Disabled</h2>
        <PieChart width={730} height={250}>
          <Pie
            label={({ name, value }) => `${name}: ${value}`}
            data={disabled}
            dataKey="count"
            nameKey="value"
            innerRadius="25%"
            outerRadius="50%"
          >
            {disabled.map((entry, index) => (
              <Cell fill={colorConfig[entry["value"]]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default Disabled;
