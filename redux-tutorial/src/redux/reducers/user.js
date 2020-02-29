export const userReducer = (state = 'Tom', action) => {
    switch (action.type) {
        case 'updateUser':
            return action.payload;
    }
    return state;
}