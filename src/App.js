import React, { useState } from "react";
import "./App.css";
import { getAuth } from "./service/getAuth";
import Routing from "./Routing";

const data = window.localStorage.getItem("data");
function App() {

  const [user, setUser] = useState(JSON.parse(data));
 
  const fetchAuth = async () => {
    try {
      const response = await getAuth();

      window.localStorage.setItem("data", JSON.stringify(response.data.name));
      setUser(response.data.name);
    } catch (error) {
      alert(
        "Please try again in a few minutes. We are unable to complete the verification"
      );
    }
}

  const handleSubmit = (inputValues) => {
    if (inputValues) {
      fetchAuth();
    }
  };

  return (
    <div className="App">
      <Routing handleSubmit={handleSubmit} user={user} />
    </div>
  );
}

export default App;
