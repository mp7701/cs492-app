import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import { NavLink as Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io"
import { ImNotification } from "react-icons/im";
import IconButton from '@mui/material/IconButton';
import notification from './notification.gif';
import icon from './alert-icon-red-11.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './center.css';
import Refresh from './refresh.js';
import trigger_seek from './trigger_seek.png';
  
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
  font-size: 0.75em;
  color: #FF0000;
  align-items: center;
`;

const Words3 = styled.h1`
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

const Notif = () => {
  const notify = () => toast("Notice how the red notification caught your attention? The color red is associated with something noteworthy happening, and is harder to ignore than any other colour. Using red as a notification badge makes sense because we are already conditioned to pay attention to red signals as items that require our attention.");
return (
  <div>
    <Refresh props="/features/content-short"></Refresh>
	<div class = "center">
      <Title>
			Notifications
		</Title>
        <Words style={{float: 'center'}}>
        “Someone just commented on my post, I have to see what they said”
		</Words>
		<img src={notification} alt="my-gif" width="700" height="500"/>
    <div>
    <IconButton aria-label="refresh" size="large" onClick={notify}>
        <img src={icon} alt="icon" width="35" height="30"/>
        <Words2>
          You have a notification! Click to see
        </Words2>
    </IconButton>
    <ToastContainer />
  </div>
	</div>
  <Words3>
  Notifications are hard to ignore. They can vibrate, ring, light up your phone, or are the first thing you see when you check your phone. These attention-grabbing mechanisms are referred to as triggers. Once they grab your attention, you enter the dopamine cycle. For example, your friend shares an Instagram post, which is the first thing you see when you check your phone. This piques your interest, and the unpredictability of not knowing what post they shared is addicting in itself (Mujica et al., 2022). However, even if the post is not attractive, you are left wanting more content. Thus you seek it and enter the endless dopamine cycle.
  </Words3>
  <Title2>
  Intermittent Reinforcement Scheduling
  </Title2>
  <Words3>
  Notifications are delivered at random intervals; this is known as intermittent reinforcement scheduling. This has been shown to create persistent behavioral habits (Mujica et al., 2022). The more we repeat this cycle of opening our notifications and getting dopamine from them, our brains will perceive this as a positive action. Unfortunately, this leads to hypernatural monitoring of our notification center, which can be mentally destructive.
  </Words3>
  <Title2>
  Can't we turn off notifications?
  </Title2>
  <Words3>
  For the same reason people stay on these large social platforms, they also leave notifications on. We have become dependent on social media and notifications to keep a continuous communication stream with many in our social circles. The core issue is large platforms; for example, Instagram has little customization to filter which notifications can be allowed and how often they are delivered. Moreover, we speculate that these features most likely do not exist for a reason.

  </Words3>
  <Title2>
  Dopamine Cycle
    </Title2>
    <div class = "center">
    <img src={trigger_seek} alt="my-gif" width="300" height="115"/>
    </div>
  </div>
);
};

export default Notif;
