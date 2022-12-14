import React from 'react';
import styled from "styled-components";
import "@fontsource/montserrat";
import extension from './extension.png';


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

const SignUp = () => {
return (
	<div>
	<Title>
			Our Chrome Extension
		</Title>
    <div class = "center">
		<img src={extension} alt="my-gif" height={350} width = {700}/>
		</div>
    <Title>
      Relevance
    </Title>
    <p><Words>
    This Chrome extension will help objectify how your social media time is really spent. The extension uploads your screen time from popular social media websites to your Google calendar. Correctly perceiving your time on social media is often a problem, because these platforms are a dopamine feast for our “monkey” brains, and it’s been shown that: “increased dopamine release speeds up an animal's subjective sense of time” (Simen, 2018). Many of us don’t realize how long we actually spend on these social media platforms. 
    </Words></p>
    
    <Words>
    It’s also important to recognize exactly the time of day when we are using these social media platforms. Often we plan to study, just to get side tracked by social media. It’s important to objectively understand how often this happens to us. Moreover, once we return to studying, it's increasingly more difficult. This is yet again due to dopamine. As we have now concretely learned, social media releases a lot of dopamine. The issue is, our brain can only create so much of it. Once we leave social media our dopamine level doesn’t drop back to baseline, but actually below (Lembke, 2021)! Since dopamine is what makes us feel good, we return to studying in a deficit and not feeling as “good”. Moreover a lack of dopamine, makes us less motivated and excited about things, such as studying (Healthdirect, 2021). 
    </Words>
    <Title>
      How it works
    </Title>
    <p>
    <Words>
    In short, it works by collecting the start time (when you first view the website) and the end time (when you leave the website). Once you leave the website, an event will be created in your Google Calendar with the respective start and end times, and also with the title of the social media website you visited. You can also customize the websites you wish to track screen time for.
    </Words>
    </p>
    <p>
    <Words>
    * You must view the webpage for more than one minute for the screen time session to be uploaded to your Google calendar. 
    </Words>
    </p>
    <Words href = "https://chrome.google.com/webstore/detail/chrome-time-tracker/dcfplhjfgeeffdagbenbdmmccdkjanon/related?hl=en-GB&authuser=0">
    Download it now on the Chrome Web Store!
    </Words>
	</div>
);
};

export default SignUp;
