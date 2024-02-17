import React, { useState } from "react";
import { Button, Box, TextField, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../../Model/UserSlice.js";
import { User } from "../../Model/User.ts";

export const LoginCard = ({ setSelect }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-4xl text-slate-600 font-semibold">
        Effettua il login
      </h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="flex flex-col"
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
      <div className="flex flex-col items-center gap-4">
        <p className="text-slate-600 text-lg font-semibold">
          ...oppure non hai un account?
        </p>
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
