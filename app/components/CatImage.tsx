import styles from '../../styles/Home.module.css'

interface CatImageProps {
  url: string | null;
}

export default function CatImage({ url }: CatImageProps) {
  if (!url) {
    return <div>No image generated yet.</div>
  }

  return (
    <img src={url}
      alt="Random Cat"
      width={500}
      height="auto"
      className={styles.image}
    />
  );
}
