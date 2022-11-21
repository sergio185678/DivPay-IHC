import React from 'react'

function ComoFunciona(prop) {
  return (
    <div className="contenedor sobre-nosotros" id="comofunciona">
            <h2 className="titulo">¿Como funciona?</h2>
            <div className="contenedor-sobre-nosotros">
                <img src={prop.image} alt="" className="imagen-about-us"/>
                <div className="contenido-textos">
                    <h3><span>1</span>Cotiza tu operación</h3>
                    <p>Con el uso de la calculadora puedes ver y cotizar la operación que quieres realizar</p>
                    <h3><span>2</span>Transfiere el monto a nuestras cuentas oficiales</h3>
                    <p>Contamos con cuentas oficiales para realizar las transacciones, utilizalas para continuar tu proceso de cambio de divisas</p>
                    <h3><span>3</span>Revisa la aceptación y validación del proceso</h3>
                    <p>Confirma y verifica que efectivamente las transacciones sean correctos y que el monto cotizado sea el correcto</p>
                    <h3><span>4</span>Recibe tu cambio en la cuenta ingresada</h3>
                    <p>Finaliza tu proceso recibiendo tu cambio en la cuenta ingresada y disfrutando al máximo de tu ahorro obtenido</p>
                </div>
            </div>
      </div>
  )
}

export default ComoFunciona