import React, { useState, useEffect } from "react";
import Axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";
const API2 = "https://xkzrj7.csb.app/mocks/users.json";

function UsersListing() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    // fetch(API)
    //   .then((response) => response.json())
    //   .then((result) => setUsers(result));
    Axios.get(API2)
      .then((response) => {
        if (response && response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log("ERR: FETCHING TODO FAILED", err));
  }, []);

  function updateState(user = {}) {
    let usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
  }

  function saveData() {
    Axios.post(API, {
      name: "Vishnu vardhan",
      username: "Bret",
      email: "vishnuvardhan@yahoo.com"
    })
      .then((result) => updateState(result.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ul>
        {users?.map((d, i) => (
          <li key={`users-list-${i}`}>{d.name}</li>
        ))}
      </ul>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default UsersListing;
