import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contribution = (props) => (
  <tr>
    <td>{props.contribution.username}</td>
    <td>{props.contribution.description}</td>
    <td>{props.contribution.duration}</td>
    <td>{props.contribution.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.contribution._id}>edit</Link> |{" "}
      <Link
        to="/"
        onClick={() => {
          props.deletContribution(props.contribution._id);
        }}
      >
        delete
      </Link>
    </td>
  </tr>
);

function ContributionList() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/contributions/")
      .then((response) => {
        setContributions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(contributions);

  const deletContribution = (id) => {
    axios
      .delete("http://localhost:5000/contributions/" + id)
      .then((response) => {
        console.log(response.data);
      });

    setContributions(contributions.filter((del) => del._id !== id));
  };

  // function contributionList() {
  const contributionList = () => {
    return contributions.map((currentContribution) => (
      <Contribution
        contribution={currentContribution}
        deletContribution={deletContribution}
        key={currentContribution._id}
      />
    ));
  };

  return (
    <div>
      <h3>Logged Project Contributions</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration (Hours)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{contributionList()}</tbody>
      </table>
    </div>
  );
}

export default ContributionList;
