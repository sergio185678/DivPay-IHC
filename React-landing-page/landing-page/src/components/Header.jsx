import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <header>
      <Navbar 
      image={props.image}
      />
      <div id="inicio">
        <section className="textos-header">
              <h1>DIVPAY</h1><br/><br/><br/><br/><br/>
              <h2>Vive la experiencia de ahorrar con el mejor tipo de cambio en el Perú</h2>
        </section>
        <div className="wave" id="a1"><svg viewBox="0 0 500 150" preserveAspectRatio="none" id="a2">
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" id="a3"></path>
                </svg>
        </div>
      </div>
    </header>
    
  );
}

export default Header;
