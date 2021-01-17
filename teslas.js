// Check if in "teslasArr" every item is "Tesla"
// let teslasArr = ["Tesla", "Tesla", "Tesla", "Tesla", "Tesla"];

function checkTeslasArr(carCompany) {
    return carCompany == "Tesla";
};

function checkTeslas() {
    paragForArr.innerHTML = teslasArr.every(function(carCompany) {
        let teslasArr = ["Tesla", "Tesla", "Tesla", "Tesla", "Tesla"];
        if (carCompany == "Tesla") {
            return carCompany;
        };
    });
};