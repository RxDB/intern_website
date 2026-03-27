import styles from './Button.module.css'

const Button = ({
    label,
    onClick,
    type,
})=>{
    return(
        <button 
            type={type} 
            onClick={onClick}
            className={`${styles.button} ${type === 'submit' ? styles.primary : styles.secondary}`}
        >
            {label}
        </button>
    )
}

export default Button