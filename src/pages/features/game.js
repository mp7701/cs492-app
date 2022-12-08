import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import { NavLink as Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io"
import IconButton from '@mui/material/IconButton';
import streak from './streak.gif';
import './center.css';
import './overlay.css';
import reward from './reward.png';
import Refresh from './refresh.js';


const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: #34344A;
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
  font-style: italic;
  font-size: 1em;
  color: #34344A;
  align-items: center;
`;

const Words3 = styled.h1`
font-family: "Montserrat";
font-size: 1em;
color: #34344A;
width: 80%;
padding: 0.25em 12em;
`;

const Title2 = styled.h1`
  font-family: "Montserrat";
  font-size: 2em;
  color: #34344A;  
  width: 90%;
  background: #E7ECEF;
  padding: 0.25em 6em;
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

const Game = () => {
return (
  <div>
    <Refresh props="/features/notif"></Refresh>
  <div class = "center">
    <Title>
			Gamifying Social Interaction
		</Title>
    <Words style={{float: 'center'}}>
      "I have to log on to keep up my streak"
		</Words>
    <div class="container">
    <img src={streak} alt="streak" width="700" height="500" class="image"/>
    <div class="overlay">
    <div class="text">
      <Words2>
      Wow, you're on a 3 feature learning streak! Keep refreshing to keep the streak going :)
        </Words2>
        </div>
    </div>
    </div>
	</div>
  <Words3>
    Some social media apps like Snapchat have integrated ways to gamify social interaction to keep users engaged. For example, Snapchat employs a feature called “Streaks” that indicates how many days in a row two users have interacted. User’s become motivated to keep their streak, thus resulting in them being hooked to the app. The feature has been so effective that many users of the app have even shared their logins with friends to “keep the streak” while away on vacation.
In many instances, keeping the streak is “more important than enjoying the platform” itself, and the feature is demonstrating that these addictive engagement mechanisms are “driving usage more than enjoyment (Muldrew, 2022).”
    </Words3>
  <Title2>
      Loss Aversion
    </Title2>
    <Words3>
    One of the main psychological explanations for this feature being so addictive is that we are motivated by fear of losing streaks. This is a phenomenon known as loss aversion. Loss aversion is a bias that explains why “the pain of losing is psychologically twice as powerful as the pleasure of gaining (Liberto, 2022).” So even if keeping up with a streak or a gamified interaction becomes tiresome, the thought of losing keeps us coming back for more.
    </Words3>
  <Title2>
      Sunk Cost Fallacy
    </Title2>
    <Words3>
    Another reason why gamified interaction is so addictive is because we invest so much time into these interactions. For example, some people have streaks that are over thousands of days long, which reflects many years of constantly communicating with a friend. The more time we invest in something, the more likely we are to continue in that behviour (Beanfee, 2021). This is known as the sunk cost fallacy. Since the time we have invested cannot be recovered, we want to carry on with our behaviours so we do not feel as though they have gone to waste.
    </Words3>
  <Title2>
  Dopamine Cycle
    </Title2>
    <div class = "center">
    <img src={reward} alt="my-gif" width="250" height="115"/>
    </div>
  </div>
  
);
};

export default Game;
