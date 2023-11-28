import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/actions";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="username" name="username"/>
        <input type="password" placeholder="password" name="password"/>
        <button>Login</button>
      </form>
    </div>
  )
}
