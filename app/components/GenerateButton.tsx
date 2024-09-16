'use client'
import styles from '../../styles/Home.module.css'

export default function GenerateButton() {
  const fetchCatImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    console.log(data);
  }
  return (
    <button className={styles.button} onClick={fetchCatImage}>
      Generate
    </button>
  );
}