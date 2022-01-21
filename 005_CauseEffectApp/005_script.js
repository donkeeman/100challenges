var cocktailList = document.getElementById("cocktails");
var cocktailName = document.getElementById("cocktailName");
var cocktailImage = document.getElementById("cocktailImage");
var cocktailRecipe = document.getElementById("cocktailRecipe"); 

const cocktail = [
    { 
        name: "Midori Sour", 
        img: "https://makemeacocktail.com/images/cocktails/8791/midori-sour-720x720-recipe.jpg", 
        recipe: "Midori 1oz<br>Sweet & Sour Mix 2oz" 
    },
    { 
        name: "Grasshopper", 
        img: "https://i.pinimg.com/originals/6b/9a/a3/6b9aa3f97eb2c8fc1b4ac3865c4e3fdc.jpg", 
        recipe: "Crème de Menthe, green 2/3oz<br>Crème de Cacao, white 2/3oz<br>Cream 2/3oz" 
    },
    { 
        name: "Appletini", 
        img: "https://amandascookin.com/wp-content/uploads/2020/04/appletini-cocktail-recipe-RC-500x500.jpg", 
        recipe: "Vodka 1oz<br>Sour Apple Pucker 1oz<br>Lime Juice 1/2oz" 
    },
]

for(var i = 0; i<cocktail.length; i++){
    var list = document.createElement("li");
    var a = document.createElement("a");
    a.id = i;
    a.innerHTML = cocktail[i].name;
    a.href = "";
    list.appendChild(a);
    cocktailList.appendChild(list);
    list.onclick = showPage;
}

function showPage(e){
    cocktailName.innerHTML = cocktail[e.target.id].name;
    cocktailImage.src = cocktail[e.target.id].img;
    cocktailRecipe.innerHTML = cocktail[e.target.id].recipe;
    return false;
}