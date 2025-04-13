import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { PieChart, Pie, Cell } from "recharts";

const colorConfig = {
  true: "#008000",
  false: "#4B0082",
};

const Disabled = (props) => {
  const [disabled, setDisabled] = useState(props.disabled);

  useEffect(() => {
    setDisabled(props.disabled);
  }, [props.disabled]);

  return (
    <>
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
    </>
  );
};

export default Disabled;
