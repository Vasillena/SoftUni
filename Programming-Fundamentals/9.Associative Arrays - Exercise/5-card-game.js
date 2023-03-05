function cardGame(input) {
    let powers = { '1': 10, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'J': 11, 'Q': 12, 'K': 13, 'A': 14};
    let types = { 'S': 4, 'H': 3, 'D': 2, 'C': 1};
    let players = {};
    input.forEach(line => {
        let [player, hand] = line.split(": ");
        let cards = hand.split(", ");
        players[player] === undefined ? players[player] = [] : null;
        cards.forEach(card => !players[player].includes(card) ? players[player].push(card) : null);
    })
    for (let [player, cards] of Object.entries(players)) {
        let sum = 0;
        cards.forEach(card => {
            let power = card.slice(0, 1);
            let type = card.slice(-1);
            sum += powers[power] * types[type];
        })
        console.log(`${player}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);