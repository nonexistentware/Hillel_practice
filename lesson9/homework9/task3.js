const car1 = {
    brand: "BMW",
    model: "e38",
    year: 1998
};

const car2 = {
    brand: "Ford",
    model: "Escape",
    owner: 2
};

function carSpread(car1, car2) {
    return {
        ...car1,
        ...car2
    };
}


const car3 = carSpread(car1, car2);
console.log(car3);