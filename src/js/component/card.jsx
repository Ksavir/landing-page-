import React from 'react'

export function Card() {
    return (
            <div className="card mx-4" style={{"width": "18rem"}}>
                <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/02/hipertextual-escenas-iron-man-y-avengers-endgame-que-significan-algo-muy-personal-robert-downey-jr-2020166600.jpg?w=1500&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Tony Stark - IRON MAN</h5>
                    <p className="card-text">Tony Stark es un genio inventor y multimillonario industrial, que se enfunda en su armadura de tecnología punta para convertirse en el superhéroe Iron Man</p>
                    <a href="https://marvel.fandom.com/es/wiki/Anthony_Stark_(Tierra-616)" className="btn btn-primary">Meet Iron Man</a>
                </div>
            </div>);
}

export function Card2() {
  return (
          <div className="card mx-4" style={{"width": "18rem"}}>
              <img src="https://www.cinemascomics.com/wp-content/uploads/2020/07/chris-evans-capitan-america-peliculas-de-marvel-960x720.jpg.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Steve Rogers - CAPTAIN AMERICA</h5>
                  <p className="card-text">Steven "Steve" Rogers también conocido como Captain America, el primer vengador, fue rechazado por el Ejército de los Estados Unidos durante la Segunda Guerra Mundial debido a numerosos problemas de salud. Finalmente se ofreció como voluntario para el Proyecto Renacimiento donde recibió el Suero del Súper Soldado desarrollado por Dr. Abraham Erskine. </p>
                  <a href="https://marvel.fandom.com/es/wiki/Steven_Rogers_(Tierra-616)" className="btn btn-primary">Meet Captain America</a>
              </div>
          </div>);
}

export function Card3() {
  return (
          <div className="card mx-4" style={{"width": "18rem"}}>
              <img src="https://i0.wp.com/geekzpot.net/wp-content/uploads/2020/06/ThorDarkWorld_2194942100-TDW0NNG1._V362444527_SX1080_.jpg?w=1080&ssl=1" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">THOR ODINSON</h5>
                  <p className="card-text">Thor es el Dios del Trueno, miembro de la raza conocida como los Asgardianos, un grupo de seres humanoides de la Dimensión de Bolsillo de Asgard, el Reino Eterno. Thor es el hijo de Odin, el Padre de Todo y rey de Asgard.</p>
                  <a href="https://marvel.fandom.com/es/wiki/Thor_Odinson_(Tierra-616)" className="btn btn-primary">Meet Thor</a>
              </div>
          </div>);
}

export function Card4() {
  return (
          <div className="card mx-4" style={{"width": "20rem"}}>
              <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/08/spider-man1.jpg?resize=1200%2C675&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Peter Park-SPIDER-MAN </h5>
                  <p className="card-text">Peter Parker es hijo de Richard y Mary Parker, agentes de la CIA y posteriormente de S.H.I.E.L.D. Durante una visita que el brillante estudiante hacía a la Facultad de Ciencias Exactas y Naturales de la UBA, fue picado por una araña que había sido expuesta a los experimentos radiactivos que allí se llevaban a cabo</p>
                  <a href="https://marvel.fandom.com/es/wiki/Peter_Parker_(Tierra-616)" className="btn btn-primary">Meet Spider-Man</a>
              </div>
          </div>);
}

export function BarraNav() {
    return (
      <div class="container">
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Marvel World</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
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
  <h1 className="display-4">WELCOME TO MARVEL WORLD</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="https://marvel.fandom.com/es/wiki/P%C3%A1gina_principal#:~:text=Marvel%20Wiki%20%7C%20Fandom&text=Marvel%20Wiki%20es%20la%20enciclopedia,Am%C3%A9rica%2C%20Wolverine%20y%20muchos%20m%C3%A1s." role="button">Meet your favorite hero</a>
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



