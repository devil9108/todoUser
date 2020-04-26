const initialState = {
    users :[],
    isUserModelOpen : false
}

function userReducer(state = initialState, action){
    switch(action.type){
        case "ADD_USER": return {
            ...state,
            users: [...state.users,action.user]
        };

        default : return state;
    }
}

export default userReducer;