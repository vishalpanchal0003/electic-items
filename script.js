let itemContainer = document.querySelector(".all-products")

fetch('electronics.json')
.then(res=>res.json())
.then(data=>{
console.log(data)
data.forEach(element => {
    let itemdiv = document.createElement("div")
    itemdiv.classList.add("item-div")
itemdiv.innerHTML=`
<img src="${element.image}">
<h5>${element.name}</h5>
<p>${element.category}</p>
<h2>₹${element.price}</h2>
<button> <a href=${element.buy_link} target="_blank" rel="noopener noreferrer">Buy Now</button>
`
itemContainer.appendChild(itemdiv)
});
})