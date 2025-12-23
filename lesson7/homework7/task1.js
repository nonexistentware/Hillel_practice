function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function numIsEven() {
    console.log("Число є парним");
}

function numIsOdd() {
    console.log("Число є непарним");
}

handleNum(10, numIsEven, numIsOdd);
handleNum(7, numIsEven, numIsOdd);  