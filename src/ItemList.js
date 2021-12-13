import React from 'react';
import Item from './Item';
import MockData from './hackernews.json'
import './App.css';


const ItemList = () => {

	return (
		<>
		{/* placeholder content: */}
		<main>
			{/* <section className="headlines-list"> */}
				{/* <h2>articles list</h2> */}
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			{/* </section> */}
		</main>
		</>
	)

}


export default ItemList;