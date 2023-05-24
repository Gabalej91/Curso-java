/*

    <input type="number" id="num1" value="20" /><br />
    <input type="number" id="num2" value="2" /><br />
    <input type="number" readonly id="resultado" value="" /><br />
    <button onclick="calcular()">calcular</button>


function calcular() {
  let valor1 = document.getElementById("num1").value;
  let valor2 = document.getElementById("num2").value;
  let multiplicar = document.getElementById("resultado");

  //let calculo = document.getElementById("calcular");

  let resultado = valor1 * valor2;

  console.log(resultado);
  multiplicar.value = resultado;
}
*/
function calcular() {
  let valor1 = document.getElementById("num1").value;
  let valor2 = document.getElementById("num2").value;
  let multiplicar = document.getElementById("resultado");

  //let calculo = document.getElementById("calcular");

  let resultado = valor1 * valor2;

  console.log(resultado);
  multiplicar.value = resultado;
}

