import podcasts from "./data.js";

function getFreePodcasts(data){
    let temp = []
    for(let i=0; i<data.length;i++){
        if(data[i].paid == false){
            let stringed = {'title': data[i].title, 'rating': data[i].rating, 'paid': false}
            temp.push(stringed)
        }
    }
    return temp
   
}

console.log(getFreePodcasts(podcasts))