import { START_FETCHING_HEADLINES, GET_NEWS, STOP_FETCHING_HEADLINES } from '../store/actions/ActionTypes'

const initialState = {
    load: false,
    news: []
};

export const PostsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case START_FETCHING_HEADLINES:
            return {
                ...state,
                load: payload
            }
        case STOP_FETCHING_HEADLINES:
            return {
                ...state,
                load: payload
            }
        case GET_NEWS:
            return {
                load: false,
                news: payload
            }
        default:
            return state;
    }
}

export default PostsReducer