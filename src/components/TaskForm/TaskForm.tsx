import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Styles
import styles from "./TaskForm.module.css";

//Interface
import { ITask } from "../../interfaces/Task";

interface Props {
    btnText : string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDificulty] = useState<number>(0);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITask = {id, title, difficulty};

        setTaskList!([...taskList, newTask]);
        setTitle("");
        setDificulty(0);
        
    }


    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        if(e.target.name === "title"){
            setTitle(e.target.value)
        } else {
            setDificulty(parseInt(e.target.value));
        }
    }

  return (
    <section>
      <form onSubmit={addTaskHandler} className={styles["form"]}>
        <div className={styles["input_container"]}>
          <label htmlFor="title">Título:</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Título da tarefa"
            value={title}
          />
        </div>
        <div className={styles["input_container"]}>
          <label htmlFor="dificulty">Dificuldade:</label>
          <input
            onChange={handleChange}
            type="number"
            name="dificulty"
            placeholder="Dificuldade da tarefa"
            value={difficulty}
          />
        </div>
        <input type="submit" value={btnText} />
      </form>
    </section>
  );
}

export default TaskForm