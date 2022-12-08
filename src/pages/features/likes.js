import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import { NavLink as Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io"
import IconButton from '@mui/material/IconButton';
import likes from './likes.gif';
import trigger_reward from './trigger_reward.png';
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
	color: #34344A;
}
`;

const Likes = () => {
return (
  <div>
    <Refresh props="/features/game"></Refresh>
	<div class = "center">
		<Title>
			Social Comparison and Social Reward
		</Title>
    <Words style={{float: 'center'}}>
      "Who liked my photo? Why didn’t I get more likes?"
		</Words>
		<img src={likes} alt="likes" width="700" height="500"/>
	</div>
  <Words2>
  Social comparison and reward are reflected through many features across social media sites and are among the most commonly used addictive design tactics. Any feature that may be used to provide social validation would fall under this category, whether it be in the form of likes, comments, or shares. As humans, we intrinsically crave social acceptance and regularly seek approval from others. Even from the time we were children, we have been receiving recognition from parents, teachers, and other students, and we learned that “to get what we want [we must cater] to other people’s expectations (Chui, n.d).” When we receive likes and comments on our posts, we have a way to see what our followers like, and the feeling of satisfying them and receiving approval from them keeps us coming back for more. We receive a dopamine rush when we “hit a responsive chord” with our audience, so we keep going after it, leaving us stuck in a positive feedback loop (Muldrew, 2019).
  </Words2>
  <Title2>
    Operant Conditioning
  </Title2>
  <Words2>
  This idea of changing our behaviours in order to be rewarded is best explained by the theory of operant conditioning. This theory was once again discovered by B.F Skinner and is based on two assumptions. First, human behviour is best explained by a person’s environment. Second, the consequences of our actions determine the likelihood that we will repeat such actions. More specifically, we tend to repeat rewarded behaviors and avoid behviours in which we are punished. The most notable example of this is the Skinner Box experiment, where Skinner built a chamber for a rat to conduct operant conditioning research. The rat was rewarded with food when it pulled down on the lever and punished with an electrical current when it performed other actions. The study found that the rat would continue to perform the behviour that would result in a reward and avoid behviour that resulted in punishment. In a similar way, social media has become our own Skinner Box experiment. The faster we receive likes and comments, the more we will post. By positively conditioning stimuli associated with social media, the “sight of these stimuli will likely drive people’s behaviour” to post and stay logged on for longer (Reed, 2021).
  </Words2>
  <Title2>
  Dopamine Cycle
    </Title2>
    <div class = "center">
    <img src={trigger_reward} alt="my-gif" width="350" height="100"/>
    </div>
  </div>
  
);
};

export default Likes;
