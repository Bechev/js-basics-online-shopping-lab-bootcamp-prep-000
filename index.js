var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
 // write your code here
 var price =Math.floor(Math.random()*100)
 var object = {[item]:price}
 cart.push(object)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }else{
    var cartItems=[];
    for(var i=0; i< cart.length ;i++){
      console.log(cart[i])
      var object = cart[i]
      cartItems.push(Object.keys(cart[i])[0] + " at " + object.value)
    }
  }
}
/*function viewCart() {
  // write your code here
  var name=""
  var i= 0

  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }else{
    while(i < cart.length -2) {
      var items = Object.keys(cart[i])[0]
      name =  name + items + " at $" + var object[items] + ",";
      i++
    }
    var items= Object.keys(cart[i])[0]
    name =  name + items + " at $" + var object[items] + ".";
  }
console.log("In your cart, you have " + name);

}*/


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
