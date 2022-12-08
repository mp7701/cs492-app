
import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
  
const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: #34344A;
`;

const Words = styled.a`
  font-family: "Montserrat";
  font-size: 1em;
  color: #34344A;
`;

const Home = ()  => {
  return (
    <Words>
      This webpage hosts the CS492 Final Project of Mia Petrovic and Nikolas Milanovic.
      <p>
      <Words>
        Click <Words href = "/about">about</Words> to get started.
      </Words>
      </p>
    </Words>
  );
};
  
export default Home;