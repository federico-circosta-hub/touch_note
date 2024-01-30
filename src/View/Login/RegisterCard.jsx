import React, { useState } from "react";
import { Button, Box, TextField, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../../Model/UserSlice.js";
import { User } from "../../Model/User.ts";

export const RegisterCard = ({ setSelect }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
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
          id="name"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="surname"
          label="Cognome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <TextField
          required
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Button
        disabled={!name || !surname || !email}
        variant="filled"
        size="large"
        onClick={() => dispatch(setUser(new User(name, surname, email)))}
      >
        Registrati
      </Button>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Hai già un account?</p>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setSelect("login")}
        >
          Log in
        </Button>
      </div>
    </>
  );
};
