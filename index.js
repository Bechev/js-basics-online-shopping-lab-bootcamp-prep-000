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
      var item = Object.keys(cart[i])
//console.log(object[item])
      cartItems.push(Object.keys(cart[i])[0] + " at $" + object[item])
    }
    var cartList = ""
    for(var i = 0; i<cartItems.length;i++){
      if( i ===0){
        cartList= `In your cart, you have ${cartItems[i]}`
      }else if(i === cartItems.length-1){
        if(cart.length ===2){
          cartList = cartList + " and " + cartItems[i]
        }else{
            cartList = cartList + ", and " + cartItems[i]
        }
      }else {
        cartList = cartList +", " +  cartItems[i]
      }
    }
    cartList = cartList + "."
    console.log(cartList)
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i=0; i<cart.length;i++){
    var object = cart[i]
    var item = Object.keys(cart[i])
    total = total + parseInt(object[item])
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var object ={}
  for(var i=0;i<cart.length;i++){
    var tempObject = cart[i]
    var key = Object.keys(cart[i])
    object[key] = cart[i]
  }
  for (item in object){
    if(object.hasOwnProperty(item)){
      cart.splice(i,1)
      console.log(`Removed ${item} from your cart`)
    }else{
      console.log("That item is not in your cart.")
    }
  }
  return cart
}
  /*if( object.hasOwnProperty(item)===false){
    console.log("That item is not in your cart.")
  } else {
    cart.splice(i,1)
    console.log(`Removed ${item} from your cart`)
  }
  return cart*/

function placeOrder(cardNumber) {
  // write your code here

}
