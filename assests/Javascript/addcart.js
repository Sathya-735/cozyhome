document.addEventListener("DOMContentLoaded", function () {
    updateCartValue();
    displayCartItems();
  });
  
  const allproducts = [...bedroomproducts, ...diningroomproducts, ...livingroomproducts, ...studyandofficeproducts];
  const cartvalue = document.querySelector(".cart-value");
  
  function updateCartValue() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartvalue.textContent = cart.length.toString();
  }
  
  function addToCart(event) {
    const productId = event.target.getAttribute("data-product-id");
    if (!productId) return;
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = allproducts.find(p => p.id == productId);
  
    if (product) {
        let existingItem = cart.find(item => item.id == product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartValue();
    displayCartItems();
  }
  
  function buyNow(event) {
      const productId = event.target.getAttribute("data-product-id");
      if (!productId) return;
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = allproducts.find(p => p.id == productId);
  
    if (product) {
        let existingItem = cart.find(item => item.id == product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    } 
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartValue();
    displayCartItems();
    window.location.href = "addtocart.html"; 
    }
  
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart-btn")) {
        addToCart(event);
    }else if (event.target.classList.contains("buy-now-btn")) {
      buyNow(event);
    }
  });
  
  function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items-container");
    cartContainer.innerHTML = "";
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        updateTotalPrice(0);
        return;
    }
    
    let totalPrice = 0;
    let mrpTotal = 0;
    
    cart.forEach((product, index) => {
        let price = parseFloat(product.price.replace(/[^0-9.]/g, ""));
        let mrp = parseFloat(product.mrp?.replace(/[^0-9.]/g, "") || price * 1.15);
        let quantity = product.quantity || 1;
        let productTotal = price * quantity;
        let productMrpTotal = mrp * quantity;
        
        totalPrice += productTotal;
        mrpTotal += productMrpTotal;
        
        const item = document.createElement("div");
        item.classList.add("cart-item");
        
        item.innerHTML = `
            <div class="cart-item-content">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image" object-fit:cover;">
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p> ₹ ${price.toLocaleString()}</p>
                    <div class="quantity-control">
                      <p>Qty:<p> 
                      <div class="button-border">          
                        <button class="decrease-qty" data-index="${index}">-</button>
                        <span class="quantity">${quantity}</span>
                        <button class="increase-qty" data-index="${index}">+</button>
                        </div>
                        <button class="remove-from-cart-btn" data-index="${index}">Remove</button>
                    </div> 
                </div>
            </div>
        `;
        cartContainer.appendChild(item);
    });
    
    updateTotalPrice(totalPrice, mrpTotal);
    setupEventListeners();
    
    // Add Buy Now button and checkout summary
    
    const buyNowContainer = document.createElement("div");
    buyNowContainer.className = "checkout-summary";
    buyNowContainer.innerHTML = `
        <div class="delivery-address">
            <h3>Delivering To:</h3>
            <p>XXX,<br>
            No:1, ABC Street, XYZ Nagar, ZZZZZZZ, 123455<br>
            9123456789</p>
        </div>
        <div class="cart-summary">
            <h3>Cart Summary:</h3>
            <table>
                <tr>
                    <td>MRP (${cart.length} ${cart.length > 1 ? 'items' : 'item'}):</td>
                    <td>₹ ${mrpTotal.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Offer Price:</td>
                    <td>₹ ${(mrpTotal - totalPrice).toLocaleString()}</td>
                </tr>
                <tr>
                <hr class="one">
                <hr class="two">
                    <td><strong>Sub Total</strong></td>
                    <td><strong>₹ ${totalPrice.toLocaleString()}</strong></td>
                </tr>
            </table>
            <button id="buy-now-btn" class="buy-now-btn">Buy Now</button>
        </div>
    `;
    
    cartContainer.appendChild(buyNowContainer);
    
    // Add event listener for Buy Now button
    document.getElementById("buy-now-btn").addEventListener("click", function() {
        showPaymentOptions(totalPrice);
    });
  }
  
  function updateTotalPrice(total = 0, mrp = total) {
    let totalPriceContainer = document.getElementById("total-price-container");
    if (!totalPriceContainer) {
        totalPriceContainer = document.createElement("div");
        totalPriceContainer.id = "total-price-container";
        document.getElementById("cart-items-container").appendChild(totalPriceContainer);
    }
    totalPriceContainer.innerHTML = `
        <h3>Total Price: ₹ ${total.toLocaleString()}</h3>
        <p>MRP: <span style="text-decoration: line-through;">₹ ${mrp.toLocaleString()}</span></p>
    `;
  }
  
  function increaseQuantity(event) {
    event.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = event.target.getAttribute("data-index");
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  
  }
  
  function decreaseQuantity(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = event.target.getAttribute("data-index");
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  }
  
  function removeFromCart(event) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = event.target.getAttribute("data-index");
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  }
  
  
  // let mvebtns = document.querySelector(".movestocheckout");
  
  //     mvebtns.addEventListener("click", function(e) {
  //       e.preventDefault();
  //       document.getElementById("cart-items-container").style.width='40%';
  //         document.querySelector(".checkout-summary").classList.toggle('showsummary')
  //         document.getElementById('cartheading').style.display='none';
  //     });
    
  
 
  
  function setupEventListeners() {
    document.querySelectorAll(".increase-qty").forEach(button => {
        button.addEventListener("click", increaseQuantity);
    });
    document.querySelectorAll(".decrease-qty").forEach(button => {
        button.addEventListener("click", decreaseQuantity);
    });
    document.querySelectorAll(".remove-from-cart-btn").forEach(button => {
        button.addEventListener("click", removeFromCart);
    });
    
      
  }
  
  function showPaymentOptions(totalAmount) {
    // Create payment options modal
    const paymentModal = document.createElement("div");
    paymentModal.className = "payment-modal";
    paymentModal.innerHTML = `
        <div class="payment-modal-content">
            <h2>PAYMENT OPTIONS</h2>
            <div class="payment-options">
                <label class="payment-option">
                    <input type="radio" name="payment" value="upi">
                    <span>Pay by any UPI App</span>
                    <span class="payment-amount">₹ ${totalAmount.toLocaleString()}</span>
                </label>
                
                <label class="payment-option">
                    <input type="radio" name="payment" value="wallet">
                    <span>Wallet</span>
                    <span class="payment-amount">₹ ${totalAmount.toLocaleString()}</span>
                </label>
                
                <label class="payment-option">
                    <input type="radio" name="payment" value="card">
                    <span>Debit/Credit Cards</span>
                    <span class="payment-amount">₹ ${totalAmount.toLocaleString()}</span>
                </label>
                
                <label class="payment-option">
                    <input type="radio" name="payment" value="netbanking">
                    <span>Net Banking</span>
                    <span class="payment-amount">₹ ${totalAmount.toLocaleString()}</span>
                </label>
                
                <label class="payment-option">
                    <input type="radio" name="payment" value="emi">
                    <span>EMI</span>
                    <span class="payment-amount">₹ ${totalAmount.toLocaleString()}</span>
                </label>
            </div>
            <button id="place-order-btn" class="place-order-btn">Place Order</button>
        </div>
    `;
    
    document.body.appendChild(paymentModal);
    
    // Add event listener for Place Order button
    document.getElementById("place-order-btn").addEventListener("click", function() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (!selectedPayment) {
            alert("Please select a payment method");
            return;
        }
        
        // Remove payment modal with fade out effect
        paymentModal.style.opacity = "0";
        paymentModal.style.transform = "translateY(20px)";
        setTimeout(() => {
            paymentModal.remove();
            showOrderSuccess();
        }, 300);
    });
  }

  function createNewOrder() {
    const orderNumber = Math.floor(1000 + Math.random() * 9000);
    const order = {
        number: orderNumber,
        date: new Date().toLocaleString(),
        status: "Processing",
        delivery: "Within 7 days"
    };
    
    // Store in localStorage
    localStorage.setItem("currentOrder", JSON.stringify(order));
    return orderNumber;
}
  
  function showOrderSuccess() {
    const orderNumber = createNewOrder();
    const successMessage = document.createElement("div");
    successMessage.className = "order-success-message";
    successMessage.innerHTML = `
        <div class="success-content">
            <img class="success-logo" src="../assests/Images/forsucessmeesage.png" alt="Company Logo">
            <h1 class="thank-you">Thank You !!!</h1>
            <h2 class="yaahhh">Yaaahhh!</h2>
            <h1 class="order-text">Order Placed Successfully!!</h1>
            <p class="order-number">Order #${orderNumber}</p>
        </div>
    `;
    
    document.body.appendChild(successMessage);
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .order-success-message {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            animation: fadeIn 0.5s forwards;
        }
        
        .success-content {
            text-align: center;
            color: white;
            padding: 40px;
            background-color: #e2725b;
            border-radius: 10px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
            max-width: 80%;
            transform: scale(0.9);
            animation: scaleIn 0.5s 0.3s forwards;
        }
        
        .success-logo {
            width: 200px;
            height: 200px;
            margin: 0 auto 20px;
            opacity: 0;
            animation: fadeIn 0.5s forwards, logoPulse 0.5s 0.5s forwards;
            object-fit: contain;
        }
        
        .thank-you, .order-text {
            font-size: 2.2em;
            margin: 15px 0;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s 1s forwards;
        }
        
        .yaahhh {
            font-size: 2.8em;
            margin: 15px 0;
            color: white;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s 1.2s forwards, bounce 0.8s 2s;
        }
        
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        
        @keyframes scaleIn {
            to { transform: scale(1); }
        }
        
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
        }
        
        @keyframes logoPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        @keyframes fadeOut {
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Wait for logo to load before starting text animations
    const logo = successMessage.querySelector('.success-logo');
    logo.onload = () => {
        // Start animations after logo is loaded
        logo.style.animation = 'fadeIn 0.5s forwards, logoPulse 0.5s 0.5s forwards';
    };
    
    // Fallback if logo is already cached
    if (logo.complete) {
        logo.style.animation = 'fadeIn 0.5s forwards, logoPulse 0.5s 0.5s forwards';
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        successMessage.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            document.body.removeChild(successMessage);
            document.head.removeChild(style);
        }, 500);
    }, 5000);

    
    // Clear cart after successful order
    localStorage.removeItem("cart");
    updateCartValue();
    
    // Remove success message after animation
    setTimeout(() => {
        successMessage.style.opacity = "0";
        setTimeout(() => {
            successMessage.remove();
            // Refresh cart display
            displayCartItems();
        }, 500);
    }, 3000);
  }
  
  


  
//   const buynowbutton=document.getElementsByClassName('buy-now-btn')

//   buynowbutton.forEach(button=>{
//     console.log(button);
    
//     button.addEventListener("click",()=>{
//       window.location.href="addtocart.html"
//     })
//   })

function checkOrderStatus() {
    const userInput = prompt("Enter your 4-digit order number:");
    const order = JSON.parse(localStorage.getItem("currentOrder"));
    
    if (order && userInput == order.number) {
        alert(`Your order #${order.number} will arrive ${order.delivery}`);
    } else {
        alert("Order not found. Please check your number.");
    }
}
 
document.getElementById('track-order').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.track-order-container').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.track-order-container').style.display = 'none';
});

function checkOrderStatus() {
    const userInput = document.getElementById("orderNumberInput").value; 
    const order = JSON.parse(localStorage.getItem("currentOrder"));

    if (order && userInput == order.number) {
        alert(`Your order #${order.number} will arrive ${order.delivery}`);
    } else {
        alert("Order not found. Please check your number.");
    }
}

// Add event listener to the "Track Order" button
document.getElementById("trackOrderButton").addEventListener("click", checkOrderStatus);
  
  