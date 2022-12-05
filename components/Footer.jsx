import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          voluptates quidem ad deserunt odit itaque eveniet maxime, facilis
          expedita repudiandae laborum nam ab aspernatur nulla eum consectetur
          quibusdam, sapiente non!
        </p>
      </div>
      <div className={styles.logo}>
        <div className={styles.center}>
          <Image
            src="/images/5371219.jpg"
            alt="logo"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h2>Quick Links</h2>
        <ul className={styles.quickLinks}>
          <li>How this works</li>
          <li>Solidity</li>
          <li>Ethereum</li>
          <li>Hardhat</li>
          <li>Metamask</li>
          <li>GraphQl</li>
          <li>WEB3</li>
        </ul>
      </div>
    </div>
  );
}
