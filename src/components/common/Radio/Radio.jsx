import styles from './Radio.module.css'

const Radio = ({
    name,
    label,
    value,
    onChange,
    checked,
})=>{
    return(
        <label className={styles.container}>
            <input
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
                type='radio'
                checked={checked}
            />
            <span className={styles.label}>{label}</span>
        </label>
    )
}

export default Radio