import styles from "../styles/Home.module.css";
import GenerateButton from "./components/GenerateButton";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Random Cats Pics App</h1>
      <img src="https://cdn2.thecatapi.com/images/dp9.jpg"
        alt="Random Cat"
        width={500}
        height="auto"
        className={styles.image}
      />
      <GenerateButton />
    </div >
  );
}
