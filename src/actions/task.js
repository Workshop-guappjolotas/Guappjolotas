import { db } from "../firebase/firebase-config"
import { types } from '../types/types';
import { loadTasks } from '../helpers/loadTasks';
import Swal from 'sweetalert2';


//cargar tareas db 
export const startLoadingTask = () => {
    return async (dispatch) => {
        //obtener tareas del user
        const tasks = await loadTasks()
         dispatch(setTask(tasks)) 
    }
}

export const setTask = (tasks) => {
    return {
        type: types.tasksLoad,
        payload: tasks
    }
}