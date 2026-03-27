import styles from './Sidebar.module.css'

const SidebarItem = ({icon,label})=>{
    return(
        <div className={styles.row}>
            {icon && <img src={icon} alt="Icon" className={styles.icon} />}
            <span>{label}</span>
        </div>
    )
}



const Sidebar = ()=>{
    return(
        <div className={styles.suite}>
            <div className={styles.top}>
                <div className={styles.logo}>Project Management</div>
                <div className={styles.logoText}>Enterprise Suite</div>
            </div>
        <div className={styles.sidebar}>
           <SidebarItem
            icon="./public/heart.png"
            label="DashBoard"
        />
          <SidebarItem
            icon="./public/heart.png"
            label="Inventory" 
        />
          <SidebarItem
            icon="./public/heart.png"
            label="WishList"
        />
          <SidebarItem
            icon="./public/heart.png"
            label="Analytics"
        />
        </div>
        </div>
    )
}

export default Sidebar