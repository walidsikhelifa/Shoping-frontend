// login and signup
document.querySelectorAll('.login').forEach(login => {
     login.addEventListener('click',()=>{
        document.querySelector('.kullech').style.display = 'none'
        document.getElementById('produit').style.display = 'none'
        document.querySelector('.navbar').style.visibility = 'hidden'
        document.querySelector('.login-page').style.display = 'block'
        document.querySelector('.signup-page').style.display = 'none'
    })
})
document.querySelectorAll('.signup').forEach(sign => {
    sign.addEventListener('click',()=>{

       document.querySelector('.kullech').style.display = 'none'
       document.getElementById('produit').style.display = 'none'
       document.querySelector('.navbar').style.visibility = 'hidden'
       document.querySelector('.login-page').style.display = 'none'
       document.querySelector('.signup-page').style.display = 'block'
   })
})
const closeLog = document.querySelector('.fa-close')
closeLog.addEventListener('click' , () =>{
    document.querySelector('.login-page').style.display = 'none'
    document.getElementById('produit').style.display = 'grid'
    document.querySelector('.navbar').style.visibility = 'visible'
    document.querySelector('.kullech').style.display = 'block'
})
const closeSig = document.querySelector('.fa-close')
closeSig.addEventListener('click' , () =>{
    document.querySelector('.signup-page').style.display = 'none'
    
    document.querySelector('.kullech').style.display = 'inline-block'
})
// card

const sidBAr = document.querySelector('.sidebar')
//kkdkd
const show = document.querySelector('.fa-solid')
const product = [
    {
        id:0,
        image:'img1.png',
        title:'your logo',
        price:3.99,

    },
    {
        id:1,
        image:'img2.png',
        title:'brand 1',
        price:2.62,
    },
    {
        id:3,
        image:'img3.png',
        title:'brand 2',
        price:4.77,
    },
    {
        id:0,
        image:'img1.png',
        title:'your logo',
        price:3.99,

    },
    {
        id:1,
        image:'img2.png',
        title:'brand 1',
        price:2.62,
    },
    {
        id:3,
        image:'img3.png',
        title:'brand 2',
        price:4.77,
    },
    {
        id:0,
        image:'img1.png',
        title:'your logo',
        price:3.99,

    },
    {
        id:1,
        image:'img2.png',
        title:'brand 1',
        price:2.62,
    },
    {
        id:3,
        image:'img3.png',
        title:'brand 2',
        price:4.77,
    },
    {
        id:0,
        image:'img1.png',
        title:'your logo',
        price:3.99,

    },
    {
        id:1,
        image:'img2.png',
        title:'brand 1',
        price:2.62,
    },
    {
        id:3,
        image:'img3.png',
        title:'brand 2',
        price:4.77,
    },
    {
        id:0,
        image:'img1.png',
        title:'your logo',
        price:3.99,

    },
    {
        id:1,
        image:'img2.png',
        title:'brand 1',
        price:2.62,
    },
    {
        id:3,
        image:'img3.png',
        title:'brand 2',
        price:4.77,
    },
    
    
    
    


];

const categori = [...new Set(product.map((item)=>{
    return item}))]
    let i = 0
    
document.getElementById('produit').innerHTML = categori.map((item) =>{
    var{image , title , price} = item;
    return(


        `<div class="box">
            <div class="img-box">
                <img class="images" src=${image}></img>
                <p>${title}</p>
            </div>
        <div class="bottom">
        
        <h2>$ ${price}</h2>`+
        "<button onclick='addToCart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('');

var cart = [];
function deleteItem(a){
    cart.splice(a,1)
    displayCart()
}
function addToCart(a){
    cart.push({...categori[a]})
    displayCart()
}
function displayCart(){
    
    let j = 0;
    if (cart.length === 0) {

        document.getElementById('cartITem').innerHTML = 'Your cart is empty'; 
        document.getElementById('TOTAL').innerHTML = "$0.00"
        
    }else{
        var total = 0;
        document.getElementById('cartITem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total += price;
            document.getElementById('TOTAL').innerHTML =`$ ${total}`
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}></img>
                    </div>
                    <p>${title}</p>
                    <h2>$ ${price}</h2>` +
                    "<i class='fa-solid fa-trash' onclick='deleteItem("+ (j++)+")'></i></div>"
            )

                                

            
        }).join('')

    }   sidBAr.style.visibility = 'visible'

}

// kdkfk
function openEl(){
    if(sidBAr.style.visibility === 'hidden'){
       sidBAr.style.visibility = 'visible'
    }else{
        sidBAr.style.visibility = 'hidden'
    }
}
show.addEventListener('click' , openEl);

const produit = document.getElementById('produit')
const pr = document.getElementById('pr')
pr.addEventListener('click' , () =>{
    produit.style.visibility = 'visible'
    document.querySelector('.kullech').style.display = 'none'

})

