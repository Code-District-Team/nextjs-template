import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("first");
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
    </main>
  );
}
