import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Features from './pages/features/features';
import Likes from './pages/features/likes';
import Game from './pages/features/game';
import Notif from './pages/features/notif';
import Content from './pages/features/content-short';
import Algorithm from './pages/features/algorithm';
import ChromeExtension from './pages/chrome';
import Sources from './pages/sources';

function App() {
return (
	<Router>
		<div>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/features' element={<Features/>} />
		<Route path='/features/likes' element={<Likes/>} />
		<Route path='/features/game' element={<Game/>} />
		<Route path='/features/notif' element={<Notif/>} />
		<Route path='/features/content-short' element={<Content/>} />
		<Route path='/features/algorithm' element={<Algorithm/>} />
		<Route path='/chrome' element={<ChromeExtension/>} />
		<Route path='/sources' element={<Sources/>} />
	</Routes>
	</div>
	</Router>
);
}

export default App;
