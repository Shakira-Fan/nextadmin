import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"

export default function UserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/">
        <button className={styles.addButton}>Add New</button>
        </Link>
        </div>
      <table className={styles.table}></table>
    </div>
  )
}
