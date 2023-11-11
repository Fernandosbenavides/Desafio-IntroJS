let cantidad = document.querySelector("#cantidad");
let base = 150000;
let total = document.querySelector("#total");
let resta = document.querySelector("#resta");
let suma = document.querySelector("#suma");

resta.onclick = function () {
  cantidad.innerHTML--;
  total.innerHTML = (cantidad.innerHTML * base).toLocaleString();
};

suma.onclick = function () {
  cantidad.innerHTML++;
  total.innerHTML = (cantidad.innerHTML * base).toLocaleString();
};
