import React from 'react'

function QuienesSomos(prop) {
  return (
    <div className="portafolio" id="quienessomos">
        <div className="contenedor">
            <h2 className="titulo">¿Quiénes Somos?</h2>
            <p>Nosotros somos DivPay. Está conformado por estudiantes interesados en la evolución de la tecnología y el impacto positivo de la misma en las vidas de las personas. Nos entusiasma la idea de ofrecer un servicio innovador y práctico en el sector financiero. De esta manera, esperamos que nuestras propuestas e ideas puedan facilitar las rutinas relacionadas al cambio de divisas que realizan las personas día a día, así como resolver los problemas de la inseguridad ciudadana y la poca fiabilidad que ocurren en este tipo de operaciones.</p>
            <br/>
            <div id="slider-card">
                <div className="slide-container swiper">
                    <div className="slide-content">
                        <div className="card-wrapper swiper-wrapper">
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <span className="overlay"></span>
        
                                    <div className="card-image">
                                        <img src={prop.pfp1} alt="" className="card-img"/>
                                    </div>
                                </div>
        
                                <div className="card-content">
                                    <h2 className="name">Renzo Arturo Paredes Villagra</h2>
                                    <p className="description">Estudio la carrera de Ciencias de la computación. Actualmente estoy en el séptimo ciclo de mi carrera en la UPC. Me considero una persona empática, práctica y honesta. Asimismo, me considero capaz de aportar soluciones simples y entender mejor los problemas que surjan en el desarrollo de este trabajo, tomando en cuenta los diferentes puntos de vista de los integrantes de nuestro equipo.</p>
        
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <span className="overlay"></span>
        
                                    <div className="card-image">
                                        <img src={prop.pfp2} alt="" className="card-img"/>
                                    </div>
                                </div>
        
                                <div className="card-content">
                                    <h2 className="name">Sergio Andres Flores Ñahuis</h2>
                                    <p className="description">Soy un estudiante de la carrera de Ciencias de la Computación y me encuentro actualmente en el 7mo ciclo, me considero una persona responsable, en mi tiempo libre me gusta jugar videojuegos.</p>
        
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <span className="overlay"></span>
        
                                    <div className="card-image">
                                        <img src={prop.pfp3} alt="" className="card-img"/>
                                    </div>
                                </div>
        
                                <div className="card-content">
                                    <h2 className="name">Jak Cristian Campos Espinoza</h2>
                                    <p className="description">Estudiante de la carrera de Ciencias de la Computación y me encuentro actualmente en el 4to ciclo, considero que soy una persona responsable, trato de aprender cada día y apoyar en todo lo que esté a mi alcance. Me encanta hacer deporte y jugar videojuegos.</p>
        
                                </div>
                            </div>
                            <div className="card swiper-slide">
                                <div className="image-content">
                                    <span className="overlay"></span>
        
                                    <div className="card-image">
                                        <img src={prop.pfp4} alt="" className="card-img"/>
                                    </div>
                                </div>
        
                                <div className="card-content">
                                    <h2 className="name">Jhair Armando Quispe Marca</h2>
                                    <p className="description">Estudiante de la carrera de Ciencias de la Computación cursando el 4to ciclo. Me gusta jugar videojuegos y escuchar música cada vez que pueda. En cuanto a mi persona, me considero una persona responsable y solidaria para el trabajo en equipo.</p>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuienesSomos