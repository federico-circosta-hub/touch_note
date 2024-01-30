import React from "react";
import { useSelector } from "react-redux";
import { loggedUser } from "../Model/UserSlice";
const Home = () => {
  const user = useSelector(loggedUser);
  return (
    <div>
      <h2>Ciao {user.name}!</h2>
    </div>
  );
};

export default Home;
