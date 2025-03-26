const cardNumber = "4561-1213-4367-2612";

function doLuna(num) {
    num.replaceAll('-', '')
    let check = []
    for (let i = 0; i < num.length; i++) {
        let number = num[i];
        if (i % 2 == 0) {
            number *= 2
            if (number > 9) {
                number -= 9
            }
        }
        check += number
    }

    return check % 10 ? false : true
}
console.log(doLuna(cardNumber))
