// Styles
import styles from "./App.module.css"

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section>
          <h2>O que você vai fazer?</h2>
          <p>formulário</p>
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <p>lista</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
