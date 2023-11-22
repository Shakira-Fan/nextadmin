import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

export default function SingleProductPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                {/* "priority" */}
                    <Image src="/noavatar.png" alt='' fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="Title" placeholder='Shakira Fan'/>
                    <label>Price</label>
                    <input type="number" name="price" placeholder='$33' />
                    <label>Stock</label>
                    <input type="number" name="stock" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder='red' />
                    <label>Size</label>
                    <input type="text" name="size" placeholder='L' />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="10"
                        placeholder="Description"
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}
