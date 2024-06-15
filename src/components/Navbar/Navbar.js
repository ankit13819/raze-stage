import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <main className={styles.Navbar}>
      <div className={styles.razeImgContainer}>
        <img src="/Raze.png" />
      </div>
    </main>
  );
}

export default Navbar;
