import { db } from '../firebase/firebase-config';

export const loadTasks = async ( ) => {

    const notesSnap = await db.collection('inventario').get();
    const notes = [];

    notesSnap.forEach( snapHijo => {
        notes.push(
            snapHijo.data()
        )
    });
    
    return notes;
}



