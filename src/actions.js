import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
  })

// we need the requestRobots action
// that action needs a dispatch method to actually dispatch its actions  
// the below style of "requestRobots = () => (dispatch) => {"
// creates a higher order function
// because requestRobots is going return the dispatch function, which will 
// then be able to be used in the secondary function below 

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type:REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch( { type: REQUEST_ROBOTS_FAILED, payload: error}))
}