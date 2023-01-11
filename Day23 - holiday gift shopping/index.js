import products from "./data.js";



function sortProducts(data){
    return data.sort(function(a,b){return a.price-b.price})

}

const listByCheapest = sortProducts(products);
for(let i=0; i<listByCheapest.length;i++){
    console.log( listByCheapest[i].product+ ','+ listByCheapest[i].price);
}