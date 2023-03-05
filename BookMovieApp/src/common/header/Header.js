import { AppBar, Toolbar, Button } from "@material-ui/core";
import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";

export default function Header() {


  return (
    <header id="header">
        <img id="logo" src={logo} />

        <Button  variant="contained" style={{ float: 'right'}}>Login</Button>
         <Button  id="btnbookshow" variant="contained" style={{ float: 'right'}}>Book Show</Button>
    </header>
  );
}