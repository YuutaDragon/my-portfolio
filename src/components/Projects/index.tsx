import { Button } from "../Button";
import styles from "./styles.module.scss";

import zephyrus from "../../assets/zephyrus.png"

export function Projects() {
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.project}>
          <img src={zephyrus} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>Project 1</h3>
            <p>Project 1 is application think on concepts magics. This project is inovation.</p>
            <Button width={"10rem"} title={"More info"}/>
          </div>
        </div>
        <div className={styles.project}>
          <img src={zephyrus} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>Project 1</h3>
            <p>Project 1 is application think on concepts magics. This project is inovation.</p>
            <Button width={"10rem"} title={"More info"}/>
          </div>
        </div>
        <div className={styles.project}>
          <img src={zephyrus} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>Project 1</h3>
            <p>Project 1 is application think on concepts magics. This project is inovation.</p>
            <Button width={"10rem"} title={"More info"}/>
          </div>
        </div>
        <div className={styles.project}>
          <img src={zephyrus} alt="Image about project zephyrus" />
          <div className={styles.info}>
            <h3>Project 1</h3>
            <p>Project 1 is application think on concepts magics. This project is inovation.</p>
            <Button width={"10rem"} title={"More info"}/>
          </div>
        </div>
      </div>
    </section>
  );
}
