import React from "react";
import styled from "styled-components";
import Body from "./Body";
import Header from "./Header";

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0;
  position: relative;
  font-family: Montserrat;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
};

export default Home;
