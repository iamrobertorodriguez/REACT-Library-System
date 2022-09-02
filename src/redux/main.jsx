
import { actions } from "./actions";

const INITIAL_STATE = {
    isLoading: false,
    book: {},
    books: [],
    category: {},
    categories: [],
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
            case actions.setIsLoading:
                return {
                    ...state,
                    isLoading: action.payload
                }
            case actions.setBook:
                return {
                    ...state,
                    book: action.payload
                }
            case actions.setBooks:
                return {
                    ...state,
                    books: action.payload
                }
            case actions.setCategory:
                return {
                    ...state,
                    category: action.payload
                }
            case actions.setCategories:
                return {
                    ...state,
                    categories: action.payload
                }
        default:
            return state;
    }
}

export default reducer;