import products from "./data.js";
function getSaleItems(data){
    console.log('inside');
    let temp = [];
    for(let i=0;i<data.length;i++){
        if(data[i].type == "sweet"){
            temp.push({"item:" : data[i].item, "price:": data[i].price});
        }
    }
    return temp;
};
console.log(getSaleItems(products))