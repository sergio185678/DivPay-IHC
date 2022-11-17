var moneda_enviar = null;
var moneda_recibir = null;
var montototal = null;
var montorecibir = null;
var tipodecambio = null;
var respuesta = null;

function siguiente_paso() {
    moneda_enviar = document.getElementById("moneda_e").value;
    moneda_recibir = document.getElementById("moneda_r").value;
    montototal = document.getElementById("monto").value;
    
    if (montototal != "" &&  moneda_enviar != "" &&  moneda_recibir != "")
    {
        if (moneda_enviar=="pen" && moneda_recibir=="usd") {
            montorecibir = montototal*0.25;
            tipodecambio = 0.25;
        }
        if (moneda_enviar=="pen" && moneda_recibir=="eur") {
            montorecibir = montototal*0.25;
            tipodecambio = 0.25;
        }
        if (moneda_enviar=="usd" && moneda_recibir=="pen") {
            montorecibir = montototal*3.95;
            tipodecambio = 3.95;
        }
        if (moneda_enviar=="usd" && moneda_recibir=="eur") {
            montorecibir = montototal*1.01;
            tipodecambio = 1.01;
        }
        if (moneda_enviar=="eur" && moneda_recibir=="pen") {
    
            montorecibir = montototal*3.92;
            tipodecambio = 3.92;
        }
        if (moneda_enviar=="eur" && moneda_recibir=="usd") {
            montorecibir = montototal*0.99;
            tipodecambio = 0.99;
        }
        document.getElementById("tipodecambio").innerHTML = "Tipo de cambio: ";
        document.getElementById("num1").innerHTML = tipodecambio;
        document.getElementById("recibido").innerHTML = "Recibes: "; 
        document.getElementById("num2").innerHTML = montorecibir + " " + moneda_recibir.toUpperCase();
    }  
}

function comparar(id) {
    if (id == "moneda_e")
    {
        moneda_recibir = document.getElementById("moneda_r").value;
        moneda_enviar = document.getElementById(id).value;
    }
    else
    {
        moneda_recibir = document.getElementById(id).value;
        moneda_enviar = document.getElementById("moneda_e").value;
    }

    if (moneda_enviar == moneda_recibir && moneda_enviar != "Moneda a enviar" && moneda_recibir != "Moneda a recibir")
    {
        alert("Ambos tipos de moneda no pueden ser iguales.");
        document.getElementById(id).selectedIndex = 0;
    }
    
}

function cupon_activar()
{
    cuponcod = document.getElementById("cupon").value;
    if (cuponcod != "DIVPAY"){
        alert("No se puede aplicar cupón");
    }
    else{
        alert("Cupón aplicado exitosamente");
    }
}

function intercambiar()
{
    moneda_enviar = document.getElementById("moneda_e").value;
    moneda_recibir = document.getElementById("moneda_r").value;
    if (moneda_enviar != "" && moneda_recibir != "")
    {
        document.getElementById("moneda_e").value = moneda_recibir;
        document.getElementById("moneda_r").value = moneda_enviar;
    }
    siguiente_paso();
}