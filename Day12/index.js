const dinnerFoods = ['🍝','🍔','🌮']
document.getElementById('menu').innerHTML = dinnerFoods.map((item) => {return item + "<br>"}).join("")