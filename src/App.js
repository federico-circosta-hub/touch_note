import React from "react";
import LoginPage from "./View/LoginPage.tsx";
import Home from "./View/Home.tsx";
import { loggedUser } from "./Model/UserSlice.js";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(loggedUser);

  return user ? <Home /> : <LoginPage />;
}

export default App;
