"use strict";

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
} catch(error) {
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
        };
    });
} catch (error) {
    console.log(error.name);
    console.log(error.message);
};

// Check array with a provided function with JS "every()" method. 
// If every of these items equal this value it returns true if not, false.

function checkBrand(carBrand) {
    if (carBrand == "Tesla" || carBrand == "Nikola" || carBrand == "Lucid") {
        return carBrand;
    };
};


try {
    document.getElementById("check-every-arr-item").addEventListener("mouseenter", function() {
        paragForArr.innerHTML = electricCars.every(checkBrand);
    });
} catch(error) {
    alert(error.name);
    alert(error.message);
};

// Age checker --------------------------------------

// function ageChecker() {
//     let ages = [12, 43, 65, 34, 78, 89, 17, 19, 23];
//     let inputAge = document.getElementById("age-checker").
    
//     function checkAge(age) {
//         if (age >= 18) {
//             return age;
//         }
//     }
// };

// console.log(ages);


// End of age checher -------------------------------

// Fill sportCars array with "Tesla" values
document.getElementById("fill-array").addEventListener("mouseout", function fillWithTeslas() {
    let teslaArr = sportCars.fill("Tesla");
    paragForArr.innerHTML = teslaArr;
});

// Fill array from to
document.getElementById("fill-array-specific-position").addEventListener("click", function() {
    let arrayOfNumbers = [12, 32, 4532, 542, 532, 8, 542, 81, 99, 789432, 432, 542];
    let filteredArray = arrayOfNumbers.filter(function(number) {
        if (number == 542) {
            return number;
        }
    });
    console.log(`Filtered array from array of numbers: ${filteredArray}`);

    filteredArray.every(function(value) {
        value === 542;
        filteredArray.fill("18");
        console.log(`Filtered array after filling: ${filteredArray}.`)
    });

    let mapedArray = arrayOfNumbers.map(function(value) {
        if (value === 542) {
            value = 18;
        }
        return value;
    })
    console.log(mapedArray);
});

// Convert an array to string 

let arrayOfSomething = ["string", false, 43, null, undefined, 45, "", "Valentin"];
let stringifiedArray;

function convertArrayToString() {
    stringifiedArray = arrayOfSomething.toString();
    console.log(`This is a stringified array: ${stringifiedArray}`);
};

document.addEventListener("click", convertArrayToString);

document.getElementById("main-headline").addEventListener("click", pressedButtons);

function pressedButtons(event) {
    if (event.button === 0) {
        alert(`You pressed the left button.`);
    } else if (event.button == 2) {
        alert(`You pressed the right button.`);
    } else if (event.button === 1) {
        alert(`You have used scroll button.`);
    } else {
        alert(`You did't press any button.`)
    }
    console.log(event);
}









