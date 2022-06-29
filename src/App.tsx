import React, { useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "./components/AppContext";
import Routes from "./components/Routes";

// axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);

  const resume = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}user/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    resume();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
