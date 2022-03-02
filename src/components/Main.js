import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Head from "./header";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { LinearProgress } from "@mui/material";
export default function Main() {
  const [textField, setTextField] = useState("");
  const TextField = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: palevioletred;
    }
  `;

  const charAllow = (e) => {
    setTextField(e.target.value.replace(/[^0-9_]/gi, ""));
  };
  return (
    <>
      <Head />
      <Container>
        <TextField
          placeholder="1-100"
          padding="2rem"
          value={textField}
          onChange={
            ((e) => {
              setTextField(e.target.value);
            },
            charAllow)
          }
        ></TextField>
        <CircularProgress variant="determinate" value={textField} />
        <LinearProgress variant="determinate" value={textField} />
      </Container>
    </>
  );
}
