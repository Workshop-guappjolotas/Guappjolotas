import { types } from '../types/types';

const initialState = {
    task:[],
    active:{
        title:'',
        body:'',
        url:'',
    }
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.tasksLoad:
            return {
                ...state,
                task: [...action.payload]
            }

        case types.taskAdd:
            return {
                ...state,
                task: [ action.payload, ...state.task ]
            }
        case types.taskDelete:
                return {
                    ...state,
                    task: state.task.filter( note => note.id !== action.payload )
                }   
        default:
            return state;
    }
}