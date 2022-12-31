import { Button } from "../Button";
import styles from "./styles.module.scss";

import zephyrus from "../../assets/zephyrus.png"
import todoapp from "../../assets/todoapp.png"
import xadrezgame from "../../assets/xadrezgame.jpg"

export function Projects() {
  async function linkTo(link:string) {
    window.location.href = link
  }

  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.project}>
          <img src={zephyrus} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>Zephyrus</h3>
            <p>Delivered as a service, developed with React and integrated with Google's 
              authentication and Maps API and Stripe for making payments.</p>
            <Button width={"10rem"} onClick={() => linkTo("https://github.com/YuutaDragon/zephyrus")} title={"More info"}/>
          </div>
        </div>
        <div className={styles.project}>
          <img src={todoapp} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>ToDo App</h3>
            <p>An application for organizing in Kanban format.</p>
            <Button width={"10rem"} onClick={() => linkTo("https://github.com/YuutaDragon/ToDoApp")} title={"More info"}/>
          </div>
        </div>
        <div className={styles.project}>
          <img src={xadrezgame} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>Xadrez Game</h3>
            <p>Chess game developed in C++ applying the concepts of object-oriented programming.</p>
            <Button width={"10rem"} onClick={() => linkTo("https://github.com/YuutaDragon/oo-xadrez")} title={"More info"}/>
          </div>
        </div>
      </div>
    </section>
  );
}
