// Styles
import styles from "./App.module.css"

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

//Interface
import { ITask } from "./interfaces/Task";
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText={"Criar Tarefa"} setTaskList={setTaskList} taskList={taskList} />
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <TaskList handleDelete={deleteTask}  taskList={taskList} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
