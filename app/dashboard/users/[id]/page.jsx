import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUserPage = async ({params}) => {
    const { id } = params;
    const user = await fetchUser(id)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    {/* "priority" */}
                    <Image src={user.img || "/noavatar.png"} alt='' fill />
                </div>
                {user.username}
            </div>
            <div  className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name='id' value={user.id} />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder={user.phone} />
                    <label>Address</label>
                    <input type="text" name="address" placeholder={user.address}/>
                    <select name='isAdmin' id='isAdmin'>
                        <option value={true} defaultValue={user.isAdmin}>Yes</option>
                        <option value={false} defaultValue={!user.isAdmin}>No</option>
                    </select>
                    <select name='isActive' id='isActive'>
                        <option value={true} defaultValue={user.isActive}>Yes</option>
                        <option value={false} defaultValue={!user.isActive}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage