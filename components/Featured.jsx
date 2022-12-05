import Image from "next/image";
import styles from "../styles/Featured.module.css";

export default function Featured() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        width="1000"
        height="1000"
        src="/images/NFT-MARKETPLACES.jpg"
        alt=""
      />
    </div>
  );
}
