const players = [
    {name: 'LDK', score: 30},
    {name: 'HONG', score: 40},
    {name: 'KIM', score: 50},
    {name: 'PARK', score: 60}
];

players.push({name: 'aaa', score: 20})

// map : return 되는 것을 모아서 *새로운* 배열을 *return*
const newPlayers = players.map(player => {
    return player
});
console.log(newPlayers);
console.log(players == newPlayers);