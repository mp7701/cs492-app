import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import { NavLink as Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io"
import IconButton from '@mui/material/IconButton';
import instagram from './instagram.gif';
import seek_anticipate from './seek_anticipate.png';
import './center.css';
import Refresh from './refresh.js';

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
	color: #E5E1EE;
}
`;

console.log("test");

const Features = () => {
return (
  <div>
  <Refresh props="/features/likes"></Refresh>
	<div class = "center">
		<Title>
			Endless Scrolling and Pull to Refresh
		</Title>
		<Words style={{float: 'center'}}>
			"Where did the whole hour go? I just wanted to reply to my instagram messages"
		</Words>
    <img src={instagram} alt="my-gif" width="700" height="500"/>
    </div>
    <Words2>
    We have become all too familiar with the endless scrolling feature and regularly fall victim to it. We often see examples of this on apps such as Tik Tok, Instagram, or Twitter. One aspect of the endless scroll that keeps users hooked to an app is the sense of flow it provides. Flow is considered a “positive state of mind” and is also known as being in the zone (Montag et al., 2019). Flow immerses people in an experience and increases their sense of enjoyment. By having no definitive ending point to a feed, the endless scrolling provides a sense of flow, immerses users in the app itself, and keeps them logged in for longer. Additionally, with no natural stopping cues and time to reflect on the presented content, users are more likely to scroll mindlessly through their feed with no end goal.
    </Words2>
    <Title2>
      Intermittent Variable Rewards
    </Title2>
    <Words2>
    Additionally, the pull to refresh reflects a psychological principle referred to as intermittent variable rewards. Intermittent variable rewards refer to the delivery of rewards at irregular intervals. The theory was initially discovered by psychologist B.F Skinner and suggests that “the most addictive cycles happen when the desired rewards do not always occur and indeed are somewhat unpredictable (Mujica et al., 2022).” In other words, predictable reinforcement and rewards result in higher and more steady response rates from participants. We most commonly see this in the case of slot machines at casinos. Players have no way of knowing when they will be rewarded. However, they are driven by the idea that their next turn will be the winning one. The unpredictability of the rewards keeps players locked in and makes them reluctant to quit the game. The pull to refresh acts similarly. We are never certain what content will fill our feed next, however, the unpredictable outcome continues to drive our actions. 

    </Words2>
    <Title2>
      Dopamine Cycle
    </Title2>
    <div class = "center">
    <img src={seek_anticipate} alt="my-gif" width="400" height="115"/>
    </div>
	</div>
);
};

export default Features;
