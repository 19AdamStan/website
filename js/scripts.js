// Scroll to the products section and unblur the hero and products sections
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    const heroSection = document.getElementById('hero');
    
    // Smooth scroll to the products section
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

function goToMainShop() {
     window.location.href = 'index.html';
}

// Show Cart Modal
function showCart() {
    document.getElementById('cart-modal').style.display = "block";
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cart-modal').style.display = "none";
}

// Add Item to Cart
let cart = [];
function addToCart(product, price) {
    cart.push({ product, price });
    document.getElementById('cart-count').textContent = cart.length;
    updateCart();
}

// Update Cart Items
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.product} - €${item.price}`;
        cartItems.appendChild(listItem);
        totalPrice += item.price;
    });
    document.getElementById('total-price').textContent = `Total: €${totalPrice}`;
}

// Proceed to Payment (Placeholder Function)
function proceedToPayment() {
    alert("Proceeding to payment...");
}
