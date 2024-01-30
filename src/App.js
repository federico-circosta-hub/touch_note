import React from "react";
import LoginPage from "./View/LoginPage.tsx";
import Home from "./View/Home.tsx";
import { loggedUser } from "./Model/UserSlice.js";
import { useSelector } from "react-redux";
import MenuAppBar from "./View/Header.jsx";

function App() {
  const user = useSelector(loggedUser);

  return user ? (
    <MenuAppBar>
      <Home />{" "}
    </MenuAppBar>
  ) : (
    <LoginPage />
  );
}

export default App;
