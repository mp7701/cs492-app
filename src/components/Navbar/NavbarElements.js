import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/montserrat";

export const Nav = styled.nav`
font-family: "Montserrat";
weight: 700;
background: #8B8C89;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
font-family: "Montserrat";
color: #34344A;
display: flex;
font-size: 0.6em;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&.active {
	color: #E5E1EE;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
