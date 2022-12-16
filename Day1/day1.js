function panic(sentence){
    let temp = ""
    const myArray = sentence.split(" ");
    console.log(myArray)
    for(let i=0;i<myArray.length;i++){
        console.log(myArray[i])
        temp += myArray[i].toUpperCase()
        temp += " "
        temp += "😱"
        temp += " "
    }
    temp += "!"
    return temp;
}
// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))