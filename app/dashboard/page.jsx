import Card from "../ui/dashboard/card/card"
import styles from "../ui/dashboard/dashboard.module.css"
import Trainsactions from "../ui/dashboard/trainsactions/trainsactions"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Chart from "../ui/dashboard/chart/chart"

export default function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Trainsactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}
