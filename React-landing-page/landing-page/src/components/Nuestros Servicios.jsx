import React from "react";

function Servicios(props) {
  return (
    <section className="about-services" id="servicios">
            <div className="contenedor">
                <h2 className="titulo">Nuestros servicios</h2>
                <div className="servicio-cont">
                    <div className="servicio-ind">
                        <img src={props.image1} alt=""/>
                        <h3>Cambio a soles</h3>
                        <p>Te ofrecemos la mejor tasa de cambio, únete a nosotros y disfrutar de ahorrar</p>
                    </div>
                    <div className="servicio-ind">
                        <img src={props.image2} alt=""/>
                        <h3>Cambio a dólares</h3>
                        <p>Te ofrecemos la mejor tasa de cambio, únete a nosotros y disfrutar de ahorrar</p>
                    </div>
                    <div className="servicio-ind">
                        <img src={props.image3} alt=""/>
                        <h3>Cambio a euros</h3>
                        <p>Te ofrecemos la mejor tasa de cambio, únete a nosotros y disfrutar de ahorrar</p>
                    </div>
                </div>
            </div>
        </section>
    
  );
}

export default Servicios;
