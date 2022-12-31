import styles from "./styles.module.scss";

import c from "../../assets/c.svg";
import cshap from "../../assets/csharp.svg";
import nodejs from "../../assets/nodejs.svg";
import plus from "../../assets/plus.svg";
import react from "../../assets/react.svg";
import python from "../../assets/python.svg";
import unity from "../../assets/unity.png";
import blender from "../../assets/blender.png";

export function Skills() {
  return (
    <section className={styles.section}>
      <h2>Skills</h2>
      <div className={styles.skills}>
        <img src={react} alt="logo react" />
        <img src={nodejs} alt="logo nodejs" />
        <img src={unity} alt="logo unity" />
        <img src={blender} alt="logo blender" />
        <img src={c} alt="logo c" />
        <img src={cshap} alt="logo cshap" />
        <img src={plus} alt="logo plus" />
        <img src={python} alt="logo python" />
      </div>
    </section>
  );
}
