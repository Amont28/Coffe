// Puedes añadir alguna funcionalidad adicional aquí
// Por ejemplo, un mensaje de alerta cuando se haga clic en un producto
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Producto seleccionado: ' + item.querySelector('h2').innerText);
    });
});
