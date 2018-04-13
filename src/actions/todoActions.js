import {ADD_TODO} from '../constants';

export let addTodo = (id = 2, title = "Hi") => {
    return {
        type: ADD_TODO,
        payload: {
            id, title
        }
    }
};