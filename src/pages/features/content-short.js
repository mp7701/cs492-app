import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import { NavLink as Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io"
import IconButton from '@mui/material/IconButton';
import './center.css';
import Refresh from './refresh.js';
import video2 from "./Final_short_form.mp4";
import reward_want from './reward_want.png';
  
const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: #34344A;
`;

const Title2 = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: #34344A;  
  width: 90%;
  background: #E7ECEF;
  padding: 0.25em 6em;
`;

const Words = styled.h1`
  font-family: "Montserrat";
  font-style: italic;
  font-size: 1em;
  color: #34344A;
  background: #E7ECEF;
  align-items: center;
`;

const Words2 = styled.h1`
  font-family: "Montserrat";
  font-size: 1em;
  color: #34344A;
  width: 80%;
  padding: 0.25em 12em;
`;

export const NavLink = styled(Link)`
font-family: "Montserrat";
color: #34344A;
display: flex;
font-size: 0.75em;
align-items: center;
text-decoration: none;
padding: 0 0rem;
height: 100%;
cursor: pointer;
&.active {
	color: #34344A;
}
`;



const Content = () => {
return (
  <div>
    <Refresh props="/features/algorithm"></Refresh>
	<div class = "center">
		<Title>
			Short Form Content
		</Title>
    <Words style={{float: 'center'}}>
      “I can scroll TikTok endlessly”
		</Words>
    <video src={video2} width="600" height="300" controls="controls" autoplay="true"/>
      
	</div>
  <Words2>
  Short-form content has become increasingly popular and has been the driving feature for platforms like TikTok. Short-form content is naturally very immersive; they have an unmistakable style, concise content, and fast rhythm (Ye, 2022). However, the most captivating attribute of short-form content is that it is short. With a human attention span of around 8 seconds, short-form content does not exhaust our attention (Sandikar, 2021). The addictive effect of short-form content is real, and it is no wonder social media platforms have increasingly adopted this feature. For example, we now have YouTube shorts. YouTube always allowed the publication of minute-long videos, but now they have created a separate section of the app just for short-form content, all in an effort to gain your attention further.
  </Words2>
  <Title2>
  Necessities Release Dopamine
  </Title2>
  <Words2>
  Our brain releases dopamine to create motivation to seek necessities like food, water, and sleep, but it also does for information (Sandikar, 2021). The release of dopamine from information is what makes short-form content so addictive. So when you can create a high volume of concentrated novel information, it will naturally release enormous amounts of dopamine while not depleting our attention span.
  </Words2>
  <Title2>
    Dopamine Cycle
  </Title2>
  <div class = "center">
    <img src={reward_want} alt="my-gif" width="300" height="115"/>
    </div>
  </div>
);
};

export default Content;
