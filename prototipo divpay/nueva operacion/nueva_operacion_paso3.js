var op = null;
var op_h = "";
var moneda_recibir = null;
var monto_recibir = null;
var oculto = false;
var builder = document.createElement("a");

function verificar(){
    builder.href = window.location;
    builder.protocol = "http://";
    builder.pathname = "index.html";

    if (oculto == false)
    {
        op = document.getElementById("op").value;
    }

    if (op != "0000")
    {
        alert("Verificación fallida. Por favor, inténtelo otra vez");
    }
    else 
    {
        moneda_recibir = localStorage.getItem("moneda_r");
        monto_recibir = localStorage.getItem("monto_r");
        let msg = "Se realizó la operación de forma correcta. En un momento, le transferiremos " + monto_recibir + " " + moneda_recibir +
        " a su cuenta bancaria.";

        alert(msg);
        limpiar();
        window.location.href = builder.href;
    }
}

function ocultar(){
    if (op != "")
    {
        if (oculto == false)
        {
            op = document.getElementById("op").value;
            for (let i = 0; i < op.length; i++) {
                op_h += "*";
            }
            oculto = true;
            document.getElementById("op").value = op_h;
        }
        else
        {
            document.getElementById("op").value = op;
            op_h = "";
            oculto = false;
        }
    }
}

function limpiar(){
    localStorage.removeItem("monto_r");
    localStorage.removeItem("monto_e");
    localStorage.removeItem("moneda_e");
    localStorage.removeItem("moneda_r");
}