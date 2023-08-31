import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NameItem = (props) => {
  return (
    <div className={styles.name_wrapper}>
      <div>{props.img}</div>
      <div>{props.name}</div>
    </div>
  )
}

function NavBar(props) {

  let namesEl = props.users.map(n => <NameItem img={<img src={n.img} className={styles.img} alt="" />} name={n.name} id={n.id} />)

  return (

    <nav className={styles.nav}>
      <div className={styles.div}>
        <div>
          <span className={styles.nav_main}>Текстові канали</span>
        </div>
        <p className={styles.nav_item}>
          <NavLink to='/Chat' className={navData => navData.isActive ? styles.active : styles.nav_item}>#чат</NavLink>
        </p>
        <p className={styles.nav_item}>
          <NavLink to='/Materials' className={navData => navData.isActive ? styles.active : styles.nav_item}>#матеріали</NavLink>
        </p>
        <p className={styles.nav_item}>
          <NavLink to='/Homework' className={navData => navData.isActive ? styles.active : styles.nav_item}>#домашки</NavLink>
        </p>
        <p className={styles.nav_item}>
          <NavLink to='/Information' className={navData => navData.isActive ? styles.active : styles.nav_item}>#інформація</NavLink>
        </p>
      </div>
      <div className={styles.div}>
        <div className={styles.NameItem}>
          <div className={styles.nav_item}>
            <NavLink to='/VoiceChannel'><span className={styles.nav_main}>Голосові канали</span></NavLink>
          </div>
          <div className={styles.name_wrapper2}>
            {namesEl}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar