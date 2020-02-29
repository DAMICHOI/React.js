/*
const actions = {
    type: 'changeState',    //actions type 은 String 이다.
    payload: 'newState'
}
 */

// action creator: 액션을 동적으로 생성하는 펑션
export const updateUser = (name) => ({
    type: 'updateUser',
    payload: name
});