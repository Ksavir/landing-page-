import React from "react";
import {Card, Card2, Card3, Card4, BarraNav, Jumbotron, Footer} from "./card.jsx"

//include images into your bundlebrand


//create your first component
const Home = () => {
	return (
		<div className="" style={{backgroundColor:'black'}}>
			<div className ="mb-3 d-flex float-right"><BarraNav/></div>
				<div className ="d-flex text-center justify-content-center " style={{color:'white'}}><Jumbotron/></div>
		<div className=" text-center row d-flex justify-content-between mt-5 mb-5">
		<Card/>
		<Card2/>
		<Card3/>
		<Card4/>
		</div>
		<div className="text-center"><Footer/></div>
		
		</div>
	);
};



export default Home;
