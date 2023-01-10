import { DARK_MODE } from "../Actions/actions"



const initialState = {
    darkMode: false
}

export default function reducer (state = initialState, action){
    switch (action.type){
        case DARK_MODE:
            return{
                ...state,
                darkMode: !state.darkMode
            };
            default: 

            return { ...state};
    }
}

