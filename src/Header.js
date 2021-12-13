import React from 'react';
import './App.css';
import logo from './assets/logo.png';

const Header = () => {

	return (
		<>
		<header className="header">
			<img src={logo} />
		<h1>Hacker News</h1>
		<form>
			<p>Search: </p>
			<input type="text" placeholder="enter text" id="search-box"></input>

		</form>
		</header>
		</>
	)

}


export default Header;