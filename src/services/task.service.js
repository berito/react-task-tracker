import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const taskCollectionRef = collection(db, "tasks");
class TaskDataService {
  addTask = (newTask) => {
return addDoc(taskCollectionRef,newTask)
  };
  deleteTask=(id)=>{
    const taskDoc=doc(db,"tasks",id)
    return deleteDoc(taskDoc)

  }
  updateTask=(id,updatedTask)=>{
    const taskDock=doc(db,"tasks",id)
    return updateDoc(taskDock,updatedTask)
  }
  getAllTasks = () => {
    return getDocs(taskCollectionRef);
  };
}
export default new TaskDataService();
