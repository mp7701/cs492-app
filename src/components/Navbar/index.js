import React from "react";
import { Nav, NavLink, NavMenu }
from "./NavbarElements";
import styled from "styled-components";
import "@fontsource/montserrat";

const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: #34344A;
  background: #6096BA;
`;

const Words = styled.h2`
  font-family: "Montserrat";
  font-size: 0.75em;
  color: #34344A;
  background: #6096BA;
`;

const Navbar = () => {
return (
	<>
	<Title>
		CS492 Final Project
		<Words>
			An Investigation Into the Addictive Design of Social Media
		</Words>
		<Nav>
			<NavMenu>
			<NavLink to="/" activeStyle>
				Home
			</NavLink>
			<NavLink to="/about" activeStyle>
				About
			</NavLink>
			<NavLink to="/features" activeStyle>
				Features
			</NavLink>
			<NavLink to="/chrome" activeStyle>
				Chrome Extension
			</NavLink>
			<NavLink to="/sources" activeStyle>
				Sources
			</NavLink>
			</NavMenu>
		</Nav>
	</Title>
	</>
);
};

export default Navbar;
