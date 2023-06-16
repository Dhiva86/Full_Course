
fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
.then((response)=>response.json())
.then((data)=>{
    data.forEach(element => {
        const displayproductDetails = {
            ...element,
            brand:element.brand,
            name:element.name,
            price:element.price,
            image:element.image_link.jpg,
            link:element.website_link,
            description:element.description
        }
      makeupApi(displayproductDetails)
    })
})
.catch((error)=>console.log(error))


function makeupApi({brand,name,price,image_link,website_link,description}){
    document.body.innerHTML +=`
    <div class="container">
    <div class="info">
    <h1 id="brand">Brand:<span class="span_one"> ${brand}</span></h1>
    <h3 class="font-effect-shadow-multiple">Name of Product: <span class="span_two"> ${name}</span></h3>
    <p><span class="price">Product Price: ${price}</span></P>
    <img src="${image_link}" alt="${name}" class="image"/> 
    <span class="link">Product Link: <a href="${website_link}">Go to View Product</a></span>
    <p><span class="details">Product Description: <span class="desc">${description}</span></P>
    </div>
    </div>
    `
}

