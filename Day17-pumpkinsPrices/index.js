const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    let temp = []
    for(let i=0;i<arr.length;i++){
        let newArr = arr[i]
        if(typeof newArr == 'string' || typeof newArr == 'number'){
            temp.push(newArr)
        }
        else{
            for(let j=0; j<newArr.length; j++){
            let last = newArr[j]
            temp.push(last)
            }
        }

    }
    return temp
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
