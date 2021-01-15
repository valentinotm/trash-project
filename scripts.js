
document.getElementById("array-button").addEventListener("click", arrFunction);
    
function arrFunction() {
    let electricCars = ["Volvo", "Tesla", "Audi", "Nikola", "Lucid"];
    let dieselCars = ["Mercedes", "Volkswagen", "BMW", "Ford", "Porshe"];
    let paragForArr = document.getElementById("array").innerHTML = electricCars.concat(dieselCars, "Ferrary", "Lambarghini");
};
