function solve(quantity, type, day){
    
    let price = 0;
    let discount = 0;

    switch (type) {
        case 'Students':
            if (day == 'Friday'){
                price = 8.45;
            } else if (day == 'Saturday'){
                price = 9.80;
            } else if (day == 'Sunday'){
                price = 10.46;
            }
            if (quantity >= 30){
                discount = 0.15;
                price -= price * discount;
            }
            break;
            case 'Business':
                if (quantity >= 100){
                    quantity -= 10;
                }
                if (day == 'Friday'){
                    price = 10.90;
                } else if (day == 'Saturday'){
                    price = 15.60;
                } else if (day == 'Sunday'){
                    price = 16;
                }
                break;
                case 'Regular':
            if (day == 'Friday'){
                price = 15;
            } else if (day == 'Saturday'){
                price = 20;
            } else if (day == 'Sunday'){
                price = 22.50;
            }
            if (quantity >= 10 && quantity <= 20){
                discount = 0.05;
                price -= price * discount;
            }
            break;
    }
        let totalPrice = quantity * price;
        console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
solve(30, 'Students', 'Sunday');
solve(40, 'Regular', 'Saturday');