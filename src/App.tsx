// Styles
import styles from "./App.module.css"

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/Modal/Modal";

//Interface
import { ITask } from "./interfaces/Task";
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [tastToUpdate, setTastToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask):void => {
    hideOrShowModal(true);
    setTastToUpdate(task);
  };

  const updateTask = (id:number , title: string, difficulty:number) => {
    const updatedTask: ITask = {id,title,difficulty};

    const updatedItens = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;

      
    });

    setTaskList(updatedItens);

    hideOrShowModal(false);
  }

  return (
    <>
      <Modal
        children={
          <TaskForm
            btnText={"Editar Tarefa"}
            taskList={taskList}
            task={tastToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles["main"]}>
        <section>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText={"Criar Tarefa"}
            setTaskList={setTaskList}
            taskList={taskList}
          />
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <TaskList
            handleDelete={deleteTask}
            taskList={taskList}
            handleEdit={editTask}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
