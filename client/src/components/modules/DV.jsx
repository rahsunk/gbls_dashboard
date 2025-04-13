import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { PieChart, Pie, Cell } from "recharts";

const colorConfig = {
  true: "#008000",
  false: "#4B0082",
};

const DV = (props) => {
  const [dv, setDV] = useState(props.dv);

  useEffect(() => {
    setDV(props.dv);
  }, [props.dv]);

  return (
    <>
      <h2>DV</h2>
      <PieChart width={730} height={250}>
        <Pie
          label={({ name, value }) => `${name}: ${value}`}
          data={dv}
          dataKey="count"
          nameKey="value"
          innerRadius="25%"
          outerRadius="50%"
        >
          {dv.map((entry, index) => (
            <Cell fill={colorConfig[entry["value"]]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default DV;
