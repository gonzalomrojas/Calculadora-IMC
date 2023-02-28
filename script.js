window.onload = iniciar;

function iniciar() {
var btnCalcular =  document.getElementById("btnCalcular");
btnCalcular.addEventListener("click" , clickBtnCalcular);
}

function clickBtnCalcular() {
    var btnCalcular =  document.getElementById("txtPeso");
    var peso = txtPeso.value;

    var btnCalcular =  document.getElementById("txtAltura");
    var altura = txtAltura.value;
    
    
    var imc = peso / (altura * altura);
    alert("su IMC es: " + (imc));

}