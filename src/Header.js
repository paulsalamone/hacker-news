import React from 'react';
import './App.css';
import logo from './assets/logo.png';

const Header = () => {

	return (
		<>
		<header className="header">
		<div id="logo-text">
		<img src={logo} id="logo"/>
		<h1>Hacker News</h1>
		</div>
		<form>
			<p id="search">Search: </p>
			<input type="text" placeholder="enter text" id="search-box"></input>
			<button>Submit</button>

		</form>
		</header>
		</>
	)

}


export default Header;