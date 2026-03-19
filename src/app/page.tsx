import styles from "./page.module.css";
import DataEntryForm from "@/components/DataEntryForm/DataEntryForm";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundOverlay}></div>
      <div className="container">
        <DataEntryForm />
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 VisayasMed Hospital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
