import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import { PieChart, Pie, Cell } from "recharts";
import "./section3.css";

const colorConfig = {
  Yes: "#008000", // Green
  No: "#4B0082", // Purple
};

const Veterans = (props) => {
  const [veterans, setVeterans] = useState(props.veterans);

  useEffect(() => {
    setVeterans(props.veterans);
  }, [props.veterans]);

  return (
    <>
      <div>
        <h2>Veterans</h2>
        <PieChart width={730} height={250}>
          <Pie
            label={({ name, value }) => `${name}: ${value}`}
            data={veterans}
            dataKey="count"
            nameKey="value"
            innerRadius="25%"
            outerRadius="50%"
          >
            {veterans.map((entry, index) => (
              <Cell fill={colorConfig[entry["value"]]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};

export default Veterans;
