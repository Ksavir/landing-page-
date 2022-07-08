import React from "react";
import {Card, BarraNav, Jumbotron, Footer} from "./card.jsx"

//include images into your bundlebrand


//create your first component
const Home = () => {
	return (
		<div className="" style={{backgroundColor:'black'}}>
			<div className ="mb-3 "><BarraNav/></div>
				<div className ="d-flex text-center justify-content-center " style={{color:'white'}}><Jumbotron/></div>
					<div className="text-center row d-flex justify-content-between mt-5 mb-5" style={{height: '100vh'}}>
						<Card titulo="Tony Stark - IRON MAN" 
						imagen="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/02/hipertextual-escenas-iron-man-y-avengers-endgame-que-significan-algo-muy-personal-robert-downey-jr-2020166600.jpg?w=1500&quality=50&strip=all&ssl=1"
						descripcion="Tony Stark es un genio inventor y multimillonario industrial, que se enfunda en su armadura de tecnología punta para convertirse en el superhéroe Iron Man"
						url ="https://marvel.fandom.com/es/wiki/Anthony_Stark_(Tierra-616)"
						boton="Conoce a Iron Man" />
						
						<Card titulo="Steve Rogers - CAPTAIN AMERICA"
						imagen="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/05/hipertextual-avengers-endgame-futuro-capitan-america-2019781893-scaled.jpg?w=1560&quality=50&strip=all&ssl=1"
						descripcion="Steven 'Steve' Rogers también conocido como Captain America, el primer vengador, fue rechazado por el Ejército de los Estados Unidos durante la Segunda Guerra Mundial debido a numerosos problemas de salud. Finalmente se ofreció como voluntario para el Proyecto Renacimiento donde recibió el Suero del Súper Soldado desarrollado por Dr. Abraham Erskine."
						url="https://marvel.fandom.com/es/wiki/Steven_Rogers_(Tierra-616)"
						boton="Conoce a Captain America" />
						
						<Card
						titulo="THOR ODINSON"
						imagen="https://i0.wp.com/geekzpot.net/wp-content/uploads/2020/06/ThorDarkWorld_2194942100-TDW0NNG1._V362444527_SX1080_.jpg?w=1080&ssl=1"
						descripcion="Thor es el Dios del Trueno, miembro de la raza conocida como los Asgardianos, un grupo de seres humanoides de la Dimensión de Bolsillo de Asgard, el Reino Eterno. Thor es el hijo de Odin, el Padre de Todo y rey de Asgard."
						url="https://marvel.fandom.com/es/wiki/Thor_Odinson_(Tierra-616)"
						boton="Conoce a Thor" />
						
						<Card titulo="Peter Park-SPIDER-MAN"
						imagen="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/08/spider-man1.jpg?resize=1200%2C675&quality=50&strip=all&ssl=1"
						descripcion="Peter Parker es hijo de Richard y Mary Parker, agentes de la CIA y posteriormente de S.H.I.E.L.D. Durante una visita que el brillante estudiante hacía a la Facultad de Ciencias Exactas y Naturales de la UBA, fue picado por una araña que había sido expuesta a los experimentos radiactivos que allí se llevaban a cabo"
						url="https://marvel.fandom.com/es/wiki/Peter_Parker_(Tierra-616)"
						boton="Conoce a Spider-Man" />
		</div>
		
		<div className="text-center"><Footer/></div>
		
		</div>
	);
};



export default Home;
