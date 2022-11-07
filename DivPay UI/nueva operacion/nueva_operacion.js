var cuenta_bancaria = null;
var moneda_enviar = null;
var moneda_recibir = null;
var montototal = null;
var cuponcod = null;
var builder = document.createElement("a");

function siguiente_paso() {
    cuenta_bancaria = document.getElementById("cuentabancaria").value;
    moneda_enviar = document.getElementById("moneda_e").value;
    moneda_recibir = document.getElementById("moneda_r").value;
    montototal = document.getElementById("monto").value;
    cuponcod = document.getElementById("cupon").value;

    builder.href = window.location;
    builder.protocol = "http://";
    builder.pathname = "nueva operacion/nueva_operacion_paso2.html";


    if (cuenta_bancaria == "" || moneda_enviar== "" ||  moneda_recibir == "" || montototal == "")
    {
        alert("Por favor, ingrese todos los datos antes de iniciar la operación.");
    }
    else{
        if (moneda_enviar=="pen" && moneda_recibir=="usd") {
            localStorage.setItem('monto_r', montototal*0.25);
            localStorage.setItem('moneda_r', "USD");
        }
        if (moneda_enviar=="pen" && moneda_recibir=="eur") {
            localStorage.setItem('monto_r', montototal*0.25);
            localStorage.setItem('moneda_r', "EUR");
        }
        if (moneda_enviar=="usd" && moneda_recibir=="pen") {
            localStorage.setItem('monto_r', montototal*3.95);
            localStorage.setItem('moneda_r', "PEN");
        }
        if (moneda_enviar=="usd" && moneda_recibir=="eur") {
            localStorage.setItem('monto_r', montototal*1.01);
            localStorage.setItem('moneda_r', "EUR");
        }
        if (moneda_enviar=="eur" && moneda_recibir=="pen") {
            localStorage.setItem('monto_r', montototal*3.92);
            localStorage.setItem('moneda_r', "PEN");
        }
        if (moneda_enviar=="eur" && moneda_recibir=="usd") {
            localStorage.setItem('monto_r', montototal*0.99);
            localStorage.setItem('moneda_r', "USD");
        }
        localStorage.setItem('monto_e', montototal);
        localStorage.setItem('moneda_e', moneda_enviar);
        alert("Se inició el proceso de cambio.");
        window.location.href = builder.href;
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
}