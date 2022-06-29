import React, { useContext } from "react";

import Log from "../components/Log";
import { UserContext } from "../components/AppContext";

const Profile = () => {
  const user = useContext(UserContext);

  console.log("User:", user);

  return (
    <div className="profile-page">
      {user ? (
        <h1>UPDATE PROFILE PAGE</h1>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
