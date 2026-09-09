import styles from "./header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>sherians</h3>
      <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header
