var monto_enviar = null;
var moneda_enviar = null;
var text = null;

monto_enviar = localStorage.getItem("monto_e");
moneda_enviar = localStorage.getItem("moneda_e");
moneda_enviar = moneda_enviar.toUpperCase();

text = document.getElementById("text");
text.innerText = "Desde su banco preferido, efectúe una transferencia de " + monto_enviar + " " +  moneda_enviar + " a esta cuenta de DivPay:";

function cancelar()
{
    alert();
}