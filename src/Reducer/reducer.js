import { DARK_MODE, SPANISH_MODE } from "../Actions/actions"



const initialState = {
    darkMode: false,
    spanishMode: false
}

export default function reducer (state = initialState, action){
    switch (action.type){
        case DARK_MODE:
            return{
                ...state,
                darkMode: !state.darkMode
            };
        case SPANISH_MODE:
            return{
                ...state,
                spanishMode: !state.spanishMode
            }
            default: 

            return { ...state};
    }
}

