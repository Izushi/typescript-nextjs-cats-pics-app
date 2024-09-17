import styles from '../../styles/Home.module.css'

interface SearchCatImageResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface GenerateButtonProps {
  setCatImageUrl: (url: string) => void;
}

export default function GenerateButton({ setCatImageUrl }: GenerateButtonProps) {
  const fetchCatImage = async (): Promise<SearchCatImageResponse> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    return data[0];
  }

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Generate
    </button>
  );
}