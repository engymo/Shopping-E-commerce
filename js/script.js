
// check user name 

let links = document.getElementById('links');
let user = document.getElementById('user');

if (localStorage.getItem('userName')) {
    links.remove();
    user.innerHTML = localStorage.getItem('userName');
}


// logout //

let logOut = document.getElementById('logout');

logOut.addEventListener('click', function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1000);
})

//  shopping cart container open menu & close //


let shopIcon = document.querySelector('.bi-bag-fill');
let cartProduct = document.querySelector('.cart');
let closeIcon = document.querySelector('.close-cart');

shopIcon.addEventListener('click', function () {
    cartProduct.style.display = "block"
});
closeIcon.addEventListener('click', function () {
    cartProduct.style.display = "none"
});

// // // // // // // // // // // // // // // // // // // // // // // // 

var addToCart = document.getElementsByClassName('addtocart');
for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i]
    button.addEventListener('click', addToCartClicked)
}
function addToCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName('product-title').innerText;
    var price = shopProduct.getElementsByClassName('price').innerText;
    var productImg = shopProduct.getElementsByClassName('img-product').src;

    addProductToCart(title, price, productImg);
    updateTotal()
}
// remove from shopping Cart  //

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('btnremove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCart)
    }

    //  quantity changes

    var quintityInput = document.getElementsByClassName('cart-quntiity');
    for (var i = 0; i < quintityInput.length; i++) {
        var input = quintityInput[i]
        input.addEventListener('change', quantityChanged);
    }


}
function removeCart(event) {
    var clickedBtn = event.target;
    clickedBtn.parentElement.remove()
    updateTotal();
}
//  quantity changes

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();

}

// update total 
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quntiity')[0];
        var quintity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        total = total + (price * quintity);
        // if price contain some cents value 

        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}




