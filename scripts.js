
// Provided arrays
let electricCars = ["Volvo", "Tesla", "Audi", "Nikola", "Lucid"];
let dieselCars = ["Mercedes", "Volkswagen", "BMW", "Ford", "Porshe"];
let sportCars = ["Lamborghini", "Aston Martin", "Maclaren"];
let paragForArr = document.getElementById("resulted-array");

// Show arrays in the HTML document
document.getElementsByClassName("electric-cars")[0].innerHTML = electricCars;
document.getElementsByClassName("diesel-cars")[0].innerText = dieselCars;
document.getElementsByClassName("sport-cars")[0].innerHTML = sportCars;

// Array concatenation function
document.getElementById("concat-button").addEventListener("click", arrFunction);
function arrFunction() {
    paragForArr.innerHTML = electricCars.concat(dieselCars, "Corvet", sportCars);
};

// Array create using copied within
document.getElementById("copywithin-button").addEventListener("contextmenu", function() {
    let copiedCars = electricCars.copyWithin(0, 1);
    let lastElement = copiedCars.pop();
    paragForArr.innerHTML = copiedCars + "," + lastElement;
});

// Volksvagen, BMW and Ford copied within array and pasted started from the second position
try {
    document.getElementById("copywithin-button-two").addEventListener("dblclick", function() {
        let copiedCars = dieselCars.copyWithin(0, 1, dieselCars.length - 1);
        paragForArr.innerHTML = copiedCars;
    });
} 

catch(error) {
    console.log(error.name);
    console.log(error.message);
};


// Creations iterator object with entries() method
try {
    document.getElementById("create-iterator-button").addEventListener("mousedown", function() {
        let sportCarsIteratorObject = sportCars.entries();

        let x = 1;
        for (const carBrand of sportCarsIteratorObject) {
            console.log(`${x}. Car brand: ${carBrand}`);
            x = x + 1;
        }
    });
}

catch(error) {
    console.log(error.name);
    console.log(error.message);
}





