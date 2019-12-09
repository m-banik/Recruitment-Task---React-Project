import React, { useContext } from "react";
import { StyledUserHeader } from "./user-header.styles";
import Header from "../header/header.component";
import { Link } from "react-router-dom";
import { TokenContext } from "../../contexts/contexts";

const UserHeader = () => {
  const setToken = useContext(TokenContext).setToken;
  return (
    <StyledUserHeader>
      <Link to="/">Home</Link>
      <Header />
      <span onClick={() => setToken(null)}>Log out</span>
    </StyledUserHeader>
  );
};

export default UserHeader;
