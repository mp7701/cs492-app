import React from "react";
import styled from "styled-components";
import "@fontsource/montserrat";
import dopamine from './dopamine.png';
import './center.css';

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

const About = () => {
return (
	<div>
		<Title>
			Problem Statement
		</Title>
		<p>
		<Words>
		It does not come as much of a surprise that people are more dependent on their phones than ever. Whether checking our messages, scrolling through TikTok, or just keeping up with the news, our phones are easily one of the items we reach for most throughout the day to complete everyday tasks. One study even found that the average American checks their phone over 260 times daily (Wheelwright, 2022). While we may think that our addiction to our phones is just a part of our own "wiring," one cannot help but consider how the design of social media and applications plays a part in our dependence.
		</Words>
		</p>
		<p>
		<Words>
		It is evident that most social media companies have one goal in mind, and that is making a profit. They want to develop apps that can keep users logged on for as long as possible and keep coming back for more. Thus, apps are designed with human behaviours and psychology in mind. In the app development process engineers and designers define what motivates users and what rewards they are seeking early on, in order to determine what features will keep them hooked to their phones longer. In fact, behind every major app, there are likely “thousands of engineers that have worked on this thing to try to make it maximally addicting” (Andersson, 2018). Large companies put immense pressure on employees to meet performance goals, leading them to come up with any features possible to keep users logged in. The more social media companies invest into the research and development of these addictive features to meet their bottom line, the more they will have us hooked to our devices.
		</Words>
		</p>

		<Title>
			Impact and Relevance
		</Title>
		<p>
		<Words>
		There is no question that with social media addiction also comes a negative impact on our mental well-being. Being constantly exposed to social media content may leave us comparing our lives to others, trigger the fear of missing out on events or outings, or leave us disappointed that our reality is not living up to what we see online. These feelings can manifest into social anxiety disorders or depression and negatively impact individuals' real-life relationships. Some studies suggest that individuals who reported more than 2 hours or more of social media daily experienced twice the risk of feeling socially isolated (Bhatia, 2021). Therefore, it is important to acknowledge the addictive design of social media and the impact it has on people. Our goal is to identify what some of these addictive features are, educate individuals on their social media dependence, and potentially help break some patterns of addiction.
		</Words>
		</p>
		<Title>
			Our Solution
		</Title>
		<p>
			<Words>
			This project aims to help people fight their social media addiction. As computer science students who one day may be working for some tech giants, we plan to take greater steps in developing more ethical designs for social media users. However, as we may not be in the position to take such action yet, we created this project to address social media addiction in two ways.
			</Words>
		</p>
		<p>
			<Words>
			First, we wanted to create an informative website that teaches people how social media platforms design their products to keep them addicted. This awareness will help people notice how they fall prey to these addictive tactics and thus stop them. Throughout the website, we incorporated some of these addictive features to help you better visualize them. As you navigate these features, think about where you may see them in your daily life, and ask yourself, “have I ever fallen prey to this?” You will learn more about these features under the <Words href ="/features">“Features”</Words> tab.
			</Words>
		</p>
		<p>
			<Words>
			The second part of our project was to develop a chrome extension that uploads your social media time to your google calendar. This will help objectify your time spent on social media, often something people don’t perceive correctly. You will learn more about our chrome extension under the <Words href = "/chrome">“Chrome Extension”</Words> tab, or you can download it <Words href = "https://chrome.google.com/webstore/detail/chrome-time-tracker/dcfplhjfgeeffdagbenbdmmccdkjanon/related?hl=en-GB&authuser=0">here!</Words>

			</Words>
		</p>
		<p>
			<Words>
				
While it is challenging to battle these addictive features and the social media giants that employ them on their apps, this project is a meaningful step towards educating and informing people about some of these commonly used designs and tactics.

			</Words>
		</p>
		<Title>
			Dopamine Cycle
		</Title>
		<div class = "center">
		<img src={dopamine} alt="my-gif" width="500" height="400"/>
		</div>
		<p>
			<Words>
			Throughout our website you will notice that we refer back to the dopamine cycle and the relation of some features to the steps in the dopamine cycle. Dopamine is a neurotransmitter that is “an integral part of the reward system in humans” and is released when we are exposed to addictive targets or behaviors (Mujica, et al., 2022). The dopamine cycle explains how we become hooked to certain behaviours, and the steps outlined are exploited by designers of apps to make user interfaces maximally addicting. There are 5 steps that are outlined in the dopamine cycle above: Want, Seek, Anticipate, Trigger and Rewards. Want refers to some desire for some stimiluation, whether it be out of habit or boredom. The user then is led to seek the beahviour and find different sources of stimulation. The seeking of stimuli then leads to anticipation of a reward or an end goal. A triggers is a signal that a reward is coming or is near. When the user is rewarded, they will likely fall back into the Want step, as they will desire the reward again.
			</Words>
		</p>
	</div>
);
};

export default About;
