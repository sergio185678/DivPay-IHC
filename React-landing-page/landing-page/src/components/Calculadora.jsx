import React from 'react'

function Calculadora(prop) {
  return (
    <div id="calculadora">
            <h1>Cambia de manera online</h1>
            <h2>dólares, soles y euros</h2>
            <h3 id="tit1">Compramos USD</h3>
            <h3 id="tit2">Vendemos USD</h3>
            <hr/>
            <p id="cambi1">S/ 3.840</p>
            <p id="cambi2">S/ 3.879</p>
            <div className="cuadro" id="cuadro1">
                <h4>Envias dólares</h4>
                <h5>USD ($/)</h5>
                <div className="dropdown">
                    <img src={prop.image1} alt="" className="flecha"/>
                    <div className="dropdown-content">
                        <a id="soles1">Soles</a>
                        <a id="dol1">Dólares</a>
                        <a id="eur1">Euros</a>
                    </div>
                </div>
                <input type="text" value="1000"/>
            </div>
            <img src={prop.image2} id="fechaaa"/>
            <div className="cuadro" id="cuadro2">
                <h4>Recibes soles</h4>
                <h5>PEN (S/)</h5>
                <div className="dropdown">
                    <img src={prop.image3} alt="" className="flecha"/>
                    <div className="dropdown-content">
                        <a id="soles2">Soles</a>
                        <a id="dol2">Dólares</a>
                        <a id="eur2">Euros</a>
                    </div>
                </div>
                <input type="text" value="3840" readonly/>
            </div>
            <button type="submit" className="btn-registro" id="botonregistro">Registrate ahora</button>
    </div>
  )
}

export default Calculadora