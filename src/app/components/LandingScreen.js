import { Card } from "@nextui-org/react";
import styles from "./LandingScreen.module.css";

export default function LandingPage() {
  return (
    <div className={styles.cards}>
      <Card className={styles.card}> 1 </Card>
      <Card className={styles.card}> 2 </Card>
      <Card className={styles.card}> 3 </Card>
      <Card className={styles.card}> 4 </Card>
      <Card className={styles.card}> 5 </Card>
      <Card className={styles.card}> 6 </Card>
    </div>
  );
}
