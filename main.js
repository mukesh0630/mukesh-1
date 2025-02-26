const products=[
    {id:1,name:"pikachu",img:"img.png"},
    {id:2,name:"meaw",img:"img2.png"},
    {id:3,name:"Dialga",img:"img3.jpg"},
    {id:4,name:"Raquiza",img:"img4.jpg"},
    {id:5,name:"lugia",img:"img5.jpg"},
    {id:6,name:"Mewto",img:"img6.png"},
    {id:7,name:"Arceus",img:"img7.jpg"}

];

const display= document.getElementById("parent");
products.forEach(product=> {
display.innerHTML=display.innerHTML+ `
    <div class="card" style="width: 18rem;">
        <img src="${product.img}" class="card-img-top" height="200px" width="200px" alt="...">
        <div class="card-body">
            <h4 class="card-title">pokemons</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">select Me</a>              
        </div>
    </div> `
 })
