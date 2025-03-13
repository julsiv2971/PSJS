function doConvert(sum, money, needMoney) {
    switch(money) {
        case 'ruble':
            switch(needMoney) {
                case "usd" :
                    return sum / 110
                case 'euro':
                    return sum / 114
                default: 
                    return 'null'
            }
        case 'usd': 
            switch(needMoney){
                case 'ruble' :
                    return sum* 110
                case 'euro' :
                    return sum * 0.96
                default :
                    return 'null'
            }
        case "euro":
            switch(needMoney){
                case 'ruble' :
                    return sum * 114
                case "usd" :
                    return sum * 1.04
                default :
                    return 'null'
            }
        default :
                    return 'null'
    }
}

console.log(doConvert(1000, 'ruble', "euro"))