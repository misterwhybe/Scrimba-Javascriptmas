const faveFoods = {
    breakfast: 'croissants',
    lunch: 'pasta',
    supper: 'pizza'
}
const breakfast = faveFoods.breakfast
const lunch = faveFoods.lunch
const supper = faveFoods.supper

document.getElementById("meals").innerHTML = "For breakfast, I only eat " + breakfast +"🥐" + "<br>" + "For lunch I mostly eat "+ "🍝" + lunch + "<br>" + "For supper I use " + supper + "🍕"
