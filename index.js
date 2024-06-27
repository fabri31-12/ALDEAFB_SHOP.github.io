// Esilo.js

document.addEventListener('DOMContentLoaded', function() {
    const cart = document.querySelector('.conteiner-cart-products');
    const cartIcon = document.querySelector('.carrito svg');
    const productCount = document.getElementById('contador-de-productos');
    const totalPay = document.querySelector('.total-pagar');
    let cartProducts = [];
    let total = 0;

    cartIcon.addEventListener('click', () => {
        cart.classList.toggle('visible');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.item');
            const title = product.getAttribute('data-title');
            const price = parseFloat(product.getAttribute('data-price'));

            cartProducts.push({ title, price });
            total += price;

            productCount.textContent = cartProducts.length;
            totalPay.textContent = `$${total.toFixed(2)}`;

            updateCart();
        });
    });

    function updateCart() {
        const cartProductsList = document.querySelector('.cart-products-list');
        cartProductsList.innerHTML = '';
        cartProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.textContent = `${product.title} - $${product.price.toFixed(2)}`;
            cartProductsList.appendChild(productElement);
        });
    }
});
