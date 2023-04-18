function pick(arr){
    return Math.floor(Math.random() * arr.length) ;
}

function getCard(){
    const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const suits = ['clubs','spades','hearts','diamonds'];

    return {
        value: values[pick(values)],
        suit: suits[pick(suits)]
    };
}

getCard();
