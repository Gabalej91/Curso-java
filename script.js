let precio = 200;

function calcular() {
  let cant = document.getElementById("cantidad").value;
  let categoria = document.getElementById("tipo-entrada").value;
  let valor = document.getElementById("valor-total");

  console.log(cant);
  console.log(categoria);

  let descuento = 0;

  if (categoria == 1) {
    descuento = 0.8;
  } else if (categoria == 2) {
    descuento = 0.5;
  } else if (categoria == 3) {
    descuento = 0.15;
  }

  valor.value =
    "Total a pagar: $: " + Math.round(precio * cant * [1 - descuento]);
}
