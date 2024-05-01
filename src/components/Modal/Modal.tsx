import styles from "./Modal.module.css";

interface Props {
    children: React.ReactNode;
}

const Modal = ({ children }: Props) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const closeModal = () : void => {
        const modal = document.getElementById("modal");
        modal!.classList.add("hide");
    }

  return (
    <section id="modal" className={"hide"}>
      <div className={styles["fade"]} onClick={closeModal}></div>
      <div className={styles["modal"]}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </section>
  );
}

export default Modal;