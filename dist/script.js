document.getElementById("pedidoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const pedido = document.getElementById("pedido").value;

  const mensaje = `Nuevo Pedido:\nNombre: ${nombre}\nTeléfono: ${telefono}\nPedido: ${pedido}`;
  window.location.href = `mailto:gogorator@gmail.com?subject=Nuevo Pedido&body=${encodeURIComponent(mensaje)}`;
  
  alert("¡Pedido enviado! Recibirás una copia en tu correo.");
});

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
