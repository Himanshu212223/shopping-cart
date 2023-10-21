let hamburger = document.getElementById("hamburger");

if (hamburger) {
    hamburger.addEventListener('click', function () {
        let navigation = document.getElementById("navigation");
        navigation.classList.remove('hidden');
    });
}


let xmark = document.getElementById("xmark");
if (xmark) {
    xmark.addEventListener('click', function () {
        let navigation = document.getElementById("navigation");
        navigation.classList.add('hidden');
    })
}

let quantity = document.getElementById('quantity');
if (quantity) {
    quantity.addEventListener('click', function () {
        if (quantity.value <= 0) {
            quantity.value = 1;
        }
        else {
            quantity.value = Math.ceil(quantity.value);
        }
    });
    quantity.addEventListener('mousemove', function () {
        if (quantity.value <= 0) {
            quantity.value = 1;
        }
        else {
            quantity.value = Math.ceil(quantity.value);
        }
    });
    quantity.addEventListener('mouseleave', function () {
        if (quantity.value <= 0) {
            quantity.value = 1;
        }
        else {
            quantity.value = Math.ceil(quantity.value);
        }
    });
    quantity.addEventListener('mouseover', function () {
        if (quantity.value <= 0) {
            quantity.value = 1;
        }
        else {
            quantity.value = Math.ceil(quantity.value);
        }
    });
}



if (localStorage.psCartItem != undefined) {
    document.getElementById('Happy-Shopping').style.display = 'none';
    document.getElementById("cart").classList.add('colorful');
    document.getElementById("carts").classList.add('colorful');
}
if (localStorage.psCartItem === undefined) {
    document.getElementById('Happy-Shopping').style.display = 'initial';
    document.getElementById("cart").classList.remove('colorful');
    document.getElementById("carts").classList.remove('colorful');
}

// console.log(JSON.parse(localStorage.psCartItem))


//  To display all the items added to cart
if (localStorage.psCartItem != undefined) {
    let items = JSON.parse(localStorage.psCartItem);
    // for (let i = 0; i < items.length; i++) {
    //     console.log(items[i]);
    // }
    for (let i = 0; i < items.length; i++) {
        let div = document.createElement('div');
        div.classList.add('items');
        div.innerHTML = `
        <div class="for-image">
            <img src=${items[i].imgSrc} alt="" srcset="">
        </div>
        <div class="details">
            <p class="brand">${items[i].brand}</p>
            <h3 class="name">${items[i].name}</h3>
            <input type="number" value=${items[i].quantity} class="quantity">
            <select name="" class="size">
                <option value="Small">x-Small</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Large">X-Large</option>
            </select>
            <p class="total">$ ${Number(items[i].price.split('$')[1])*Number(items[i].quantity)}</p>
            <i class="fa-solid fa-circle-xmark remove"></i>
        </div>
        ` ;
        let target = document.getElementById('section');
        target.appendChild(div) ;
    }
}



//  removing items from cart
let cartItem = document.querySelector('#section').children;
// console.log(cartItem);
if(cartItem){
    for(let i=0; i<cartItem.length; i++){
        try{
            cartItem[i].children[1].children[5].addEventListener('click',function(){
                let localCart = JSON.parse(localStorage.psCartItem);
                for(let j=0; j<localCart.length; j++){
                    if(localCart[j].imgSrc === cartItem[i].firstElementChild.firstElementChild.src){
                        console.log("same") ;
                        function matchFound(value){
                            // console.log(value)
                            return value != localCart[j] ;
                        }
                        localCart = localCart.filter(matchFound);
                    }
                }
                // console.log(localCart);
                localStorage.psCartItem = JSON.stringify(localCart) ;
                location.reload();
            });
        }
        catch(exception){
            // console.log("cart is empty");
        }
    }
}
if(localStorage.psCartItem === '[]'){
    localStorage.clear();
} ;