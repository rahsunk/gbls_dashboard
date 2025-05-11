import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { get, post } from "../../utilities";
import "./section1.css";

const Filter = (props) => {
  const [people, setPeople] = useState(props.people);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [initialSearch, setInitialSearch] = useState(true);

  useEffect(() => {
    setPeople(props.people);
  }, [props.people]);

  function handleSubmit(event) {
    event.preventDefault();

    const firstNamePrefix = event.target.fname.value;
    const lastNamePrefix = event.target.lname.value;

    const result = getPeople(firstNamePrefix, lastNamePrefix);
    console.log(result);

    setInitialSearch(false);
    setFilteredPeople(result);
  }

  function getPeople(firstNamePrefix, lastNamePrefix) {
    if (firstNamePrefix === "" && lastNamePrefix === "") {
      return [];
    }
    return people.filter(
      (person) =>
        person.firstName
          .toLowerCase()
          .startsWith(firstNamePrefix.toLowerCase()) &&
        person.lastName.toLowerCase().startsWith(lastNamePrefix.toLowerCase())
    );
  }

  return (
    <>
      <div>
        <h3>Find clients:</h3>
        <form onSubmit={handleSubmit}>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" />
          <br />
          <input type="submit" />
        </form>

        {filteredPeople.length > 0 || initialSearch ? (
          <>
            <h3>Matched People:</h3>
            <ul id="matchedPeople">
              {filteredPeople.map((person, index) => (
                <li key={index}>
                  {person.firstName} {person.lastName}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Search matches no clients</p>
        )}
      </div>
    </>
  );
};

export default Filter;
