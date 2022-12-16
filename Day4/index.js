function whisper(sentence){
    let temp = "shh... "
    if(sentence.endsWith('!')){
        sentence = sentence.slice(0,-1)
    }
    temp += sentence.toLowerCase()
    return temp
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));