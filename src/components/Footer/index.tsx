import { Avatar } from "../Avatar";
import styles from "./styles.module.scss";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiItchdotio } from "react-icons/si";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.avatarInfo}>
        <Avatar />
        <span>&copy; Guilherme 2023</span>
      </div>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/guilhermeh-rodrigues/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/YuutaDragon">
          <BsGithub />
        </a>
        <a href="https://yuutadragon.itch.io">
          <SiItchdotio />
        </a>
      </div>
    </footer>
  );
}
