// action creator: 액션을 동적으로 생성하는 펑션
/*export const updateUser = (name) => ({
    type: 'updateUser',
    payload: name
});*/

import {ADD_PLAYER, CHANGE_SCORE} from "./actionTypes";

export const addPlayer = (name) => ({
   type: ADD_PLAYER,
   name
});

export const changeScore = (id, delta) => ({
    type: CHANGE_SCORE,
    id,
    delta
});