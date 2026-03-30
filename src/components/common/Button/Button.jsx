import styles from './Button.module.css'

const Button = ({
    label,
    onClick,
    type,
    disabled,
})=>{
    return(
        <button 
            type={type} 
            onClick={onClick}
            disabled={disabled}
            className={`${styles.button} ${type === 'submit' ? styles.primary : styles.secondary}`}
        >
            {label}
        </button>
    )
}

export default Button