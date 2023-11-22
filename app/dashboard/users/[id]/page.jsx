import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
            {/* "priority" */}
            <Image src="/noavatar.png" alt='' fill/>
            </div>
            Shakira Fan
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label>Username</label>
                <input type="text" name="username" placeholder='Shakira Fan'/>
                <label>Email</label>
                <input type="email" name="email" placeholder='ShakiraFan@gmail.com'/>
                <label>Password</label>
                <input type="password" name="password"/>
                <label>Phone</label>
                <input type="phone" name="phone" placeholder='0938383838'/>
                <label>Address</label>
                <input type="text" name="address" placeholder='Taipei'/>
                <select name='isAdmin' id='isAdmin'>
                    <option defaultValue={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name='isActive' id='isActive'>
                    <option defaultValue={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}
