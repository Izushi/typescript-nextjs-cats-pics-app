'use client'
import React, { use, useState } from "react";
import styles from "../styles/Home.module.css";
import CatImage from "./components/CatImage";
import GenerateButton from "./components/GenerateButton";

export default function Home() {
  const [catImageUrl, setCatImageUrl] = useState<string | null>(null)

  return (
    <div className={styles.container}>
      <h1>Random Cats Pics App</h1>
      <CatImage url={catImageUrl} />
      <GenerateButton setCatImageUrl={setCatImageUrl} />
    </div >
  );
}
