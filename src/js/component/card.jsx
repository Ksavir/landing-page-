import React from 'react'
import PropTypes from 'prop-types'


export function Card(props) {
    return (
            <div className="card mx-4 p-0" style={{"width": "32rem" , height: "40rem"}}>
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href={props.url} className="btn btn-danger">{props.boton}</a>
                </div>
            </div>);
}

export function BarraNav() {
    return (
      <div className="">
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="d-flex justify-content-between w-100" >
  <a class="navbar-brand" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png" href="https://www.marvel.com/" alt="" width="50" height="24" className="d-inline-block align-text m-2"/>
      Mundo Marvel
    </a>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup" style={{color:'white'}}>
      <div className="navbar-nav ">
        <a className="nav-link active" aria-current="page" href="#">Super Heroes</a>
        <a className="nav-link" href="#">Villanos</a>
        <a className="nav-link" href="#">MCU</a>
        <a className="nav-link"></a>
      </div>
    </div>
  </div>
</nav>
</div>
    );
}

export function Jumbotron() {
    return <div className="jumbotron">
  <h1 className="display-5">BIENVENIDO A MUNDO MARVEL</h1>
  <p className="lead"></p>
  <hr className="my-4"/>
  <h4 className="my-4">CONOCERAS LO FASCINANTE DE LOS MEJORES SUPER HEROES DEL INCREIBLE MUNDO MARVEL</h4>
  <a className="btn btn-danger btn-lg" href="https://marvel.fandom.com/es/wiki/P%C3%A1gina_principal#:~:text=Marvel%20Wiki%20%7C%20Fandom&text=Marvel%20Wiki%20es%20la%20enciclopedia,Am%C3%A9rica%2C%20Wolverine%20y%20muchos%20m%C3%A1s." role="button">Conoce a tu superheroe favorito</a>
</div>
}

export function Footer() {
 return (
    <div class="card">
        <div class="card-body">
        <blockquote class="blockquote mb-0">
        <p>Made with love and tons of superpowers.</p>
        <footer class="blockquote-footer">By <cite title="Source Title"> Kevin Rivas</cite></footer>
        </blockquote>
  </div>
</div>
 );
}

Card.propTypes = {
  titulo : PropTypes.string,
  imagen : PropTypes.string,
  descripcion : PropTypes.string,
  url : PropTypes.string,
  boton: PropTypes.string,

}

