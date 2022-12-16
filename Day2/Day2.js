import userData from "./data.js";

let dict = []
function transformData(data){
    for(let i=0;i<data.length;i++){
        let fullName = data[i].name.first + " " +  data[i].name.last
        let birthday = new Date(data[i].dob.date)
        birthday = birthday.toDateString()
        let temp = {"fullName": fullName, "birthday": birthday}
        dict.push(temp)
    }
    return dict
}

console.log(transformData(userData));