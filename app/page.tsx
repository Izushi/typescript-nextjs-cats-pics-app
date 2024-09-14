import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Random Cats Pics App</h1>
      <img src="https://placehold.co/600x400" alt="Random Cat" />
      <button className={styles.button}>Generate</button>
    </div>
  );
}
