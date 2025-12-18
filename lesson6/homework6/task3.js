function checkOrder(available, ordered) {
    if (ordered > available) {
        console.log("Your order is too large, we don’t have enough goods")
    } else if(ordered < available) {
        console.log("Your order is accepted")
    }
}

checkOrder(100, 50);
checkOrder(100, 150);