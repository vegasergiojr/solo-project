import axios from "axios";
import { TOP_HEADLINES_URL } from "../api/NewsPostURL";
import { GET_NEWS, START_FETCHING_HEADLINES, STOP_FETCHING_HEADLINES } from "./actions/ActionTypes";

// Making the API Call

export const getTopHeadlines = () => {
    return async dispatch => {
        dispatch({
            type: START_FETCHING_HEADLINES,
            payload: true
        });

        try {
            const response = await axios.get(`${TOP_HEADLINES_URL}`);

            if (response.data.status === 'ok') {
                dispatch({
                    type: GET_NEWS,
                    payload: response.data.articles
                })
            }
        }

        catch (e) {
            dispatch({
                type: STOP_FETCHING_HEADLINES,
                payload: false
            })
        }
    }
}

export default getTopHeadlines