let cantidad = document.querySelector("#cantidad");
let precioBase = 150000;
let total = document.querySelector("#total");
let menos = document.querySelector("#menos");
let mas = document.querySelector("#mas");

menos.onclick = function () {
  cantidad.innerHTML--;
  total.innerHTML = (cantidad.innerHTML * precioBase).toLocaleString();
};

mas.onclick = function () {
  cantidad.innerHTML++;
  total.innerHTML = (cantidad.innerHTML * precioBase).toLocaleString();
};
