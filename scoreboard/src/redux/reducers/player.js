const playerInitialState = {
    players: [
        {name: 'LDK', score: 5, id: 1},
        {name: 'HONG', score: 6, id: 2},
        {name: 'KIM', score: 7, id: 3},
        {name: 'PARK', score: 8, id: 4}
    ]
};

let maxId = 4;
export const player = (state = playerInitialState, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            // 기존 배열을 deep copy 하여 새로운 배열을 생성
            const players = [ ...state.players ];
            players.push({
                name: action.name,
                score: 0,
                id: ++maxId
            })
            return {
                ...state,
                players
            }
    }
    return state;
}