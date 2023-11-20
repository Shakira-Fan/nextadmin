import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'

export default function search({placeholder}) {
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input placeholder={placeholder} className={styles.input}/>
    </div>
  )
}
