import React from "react";

function Navbar(props) {
  return (
    <div className="backgroundnavbar">
          <div className="navbar">
              <a href="#"><img src={props.image} className="logo"/></a>
              <ul>
                  <li><a href="#inicio">Inicio</a></li>
                  <li><a href="#comofunciona">¿Como funciona?</a></li>
                  <li><a href="#quienessomos">¿Quiénes Somos?</a></li>
                  <li><a href="#testimonios">Testimonios</a></li>
                  <li><a href="#servicios">Nuestros servicios</a></li>
              </ul>
          </div>
    </div>
  );
}

export default Navbar;
