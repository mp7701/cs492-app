import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import { NavLink as Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io"
import IconButton from '@mui/material/IconButton';
import algorithm from './algorithm.gif';
import './center.css';
import Refresh from './refresh.js';
import reward from './reward.png';
  
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

const Algorithm = () => {
return (
  <div>
    <Refresh props="/features"></Refresh>
	<div class = "center">
		<Title>
			Personalization and Algorithms
		</Title>
    <Words style={{float: 'center'}}>
    “The Youtube home page always knows what I want to watch”
		</Words>
		<img src={algorithm} alt="my-gif" width="700" height="500"/>
	</div>
  <Words2>
  Manipulative Algorithms have increasingly been playing a role in social media. This is most often seen with recommendation algorithms. With the enormous amount of user data collected paired with AI, big tech companies like YouTube can almost always recommend the right video at the right time (The Social Dilemma, 2020). Moreover, the algorithms are getting increasingly smarter to a point where they can even recognize your mood, enabling them to recommend videos at the perfect timing. These manipulative algorithms can be easily observed, people in your social circle may follow the same influencers, but their feeds will be entirely different. All this is in efforts to gain more of your attention. Once you are at the end of your average session time, the platform will present to you even more novel content.
  </Words2>
  <Title2>
  Hick’s Law 
  </Title2>
  <Words2>
  Hicks Law states: “The more choices users have, the harder it is for them to make one.” The less decisions we make the easier it is to get into a state of flow, which creates habits. Basic human psychology has shown that the easier the tasks, the easier it is to form the habit (Dzioba, 2022). This is evident in many social platforms like YouTube. You don’t have to put any effort into searching for the next video, you are continuously prompted new videos to watch. You don’t even have to click to watch the next video, it just autoplays.
  </Words2>
  <Title2>
    Dopamine Cycle
  </Title2>
  <div class = "center">
    <img src={reward} alt="my-gif" width="200" height="115"/>
    </div>
  </div>
);
};

export default Algorithm;
