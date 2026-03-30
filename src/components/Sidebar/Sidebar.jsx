import styles from './Sidebar.module.css'
import windowIcon from '../../icons/window-apps-16.png'
import boxIcon from '../../icons/box-3-16.png'
import heartIcon from '../../icons/heart-69-16.png'
import analyticsIcon from '../../icons/analytics-16.png'

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
            icon={windowIcon}
            label="DashBoard"
        />
          <SidebarItem
            icon={boxIcon}
            label="Inventory" 
        />
          <SidebarItem
            icon={heartIcon}
            label="WishList"
        />
          <SidebarItem
            icon={analyticsIcon}
            label="Analytics"
        />
        </div>
        </div>
    )
}

export default Sidebar