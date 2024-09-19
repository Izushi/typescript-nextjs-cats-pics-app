'use client'
import React, { use, useState } from "react";
import styles from "../styles/Home.module.css";
import CatImage from "./components/CatImage";
import GenerateButton from "./components/GenerateButton";

interface HomeProps {
  initialCatImageUrl: string;
}

export default async function Home() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  const initialCatImageUrl = data[0].url;

  return (
    <HomeComponent initialCatImageUrl={initialCatImageUrl} />
  );
}

function HomeComponent({ initialCatImageUrl }: HomeProps) {
  const [catImageUrl, setCatImageUrl] = useState<string | null>(initialCatImageUrl)

  return (
    <div className={styles.container}>
      <h1>Random Cats Pics App</h1>
      <CatImage url={catImageUrl} />
      <GenerateButton setCatImageUrl={setCatImageUrl} />
    </div >
  );
}