import React from "react";
import styled, { css } from "styled-components";
import { useRef } from "react";
import Hero from "./Hero";
import Nav from "../Nav";

const Header = () => {
  return (
    <Head>
      <Hero />
    </Head>
  );
};

const Head = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  background: #f8bc4c;
`;

export default Header;
