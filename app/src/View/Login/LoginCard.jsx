import React, { useState } from "react";
import { Button, Box, TextField, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../../Model/UserSlice.js";
import { User } from "../../Model/User.ts";

export const LoginCard = ({ setSelect: setSelect }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          required
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button
        variant={!email || !password ? "outlined" : "contained"}
        size="large"
        onClick={() => dispatch(setUser(new User(email, "surname", email)))}
      >
        Accedi
      </Button>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Non hai un account?</p>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setSelect("registrati")}
        >
          Registrati
        </Button>
      </div>
    </>
  );
};
