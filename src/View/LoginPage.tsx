import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../Model/UserSlice";
import { User } from "../Model/User.ts";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
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
        </div>
      </Box>
      <Button
        disabled={!name || !surname || !email}
        variant="outlined"
        size="large"
        onClick={() =>
          dispatch(
            //setUser({ name: "Franco", surname: "Franchi", email: "SSDD" })
            setUser(new User(name, surname, email))
          )
        }
      >
        Entra!
      </Button>
    </div>
  );
};

export default LoginPage;
