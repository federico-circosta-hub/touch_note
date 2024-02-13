import React, { useState } from "react";
import { InputCard } from "../Utils/InputCard.jsx";
import { RegisterCard } from "./RegisterCard.jsx";
import { LoginCard } from "./LoginCard.jsx";
import { Box } from "@mui/material";

export const LoginPage = () => {
  const [select, setSelect] = useState("login");

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <InputCard>
        {select === "login" ? (
          <LoginCard setSelect={setSelect} />
        ) : (
          <RegisterCard setSelect={setSelect} />
        )}
      </InputCard>
    </Box>
  );
};
