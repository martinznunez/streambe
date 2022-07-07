import React, { useEffect, useState, useCallback } from "react";


import "./App.css";
import {getAuth} from "./service/getAuth";
import Routing from "./Routing";

const data = window.localStorage.getItem("data");
function App() {
  const [user, setUser] = useState(JSON.parse(data));
  const [inputValues, setInputValues] = useState(null);

  const fetchAuth = useCallback(async (data) => {
    try {
      const response = await getAuth(data);

      window.localStorage.setItem("data", JSON.stringify(response.data.name));
      setUser(response.data.name);
    } catch (error) {
      alert(
        "Please try again in a few minutes. We are unable to complete the verification"
      );
    }
  }, []);

  useEffect(() => {
    if (inputValues) {
      fetchAuth(inputValues);
    }
  }, [fetchAuth, inputValues]);

  return (
    <div className="App">
      <Routing setInputValues={setInputValues} user={user} />
    </div>
  );
}

export default App;
