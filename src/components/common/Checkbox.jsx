import styles from './Radio.module.css'

const Checkbox = ({
    name,
    label,
    value,
    onChange,

})=>{
    return(
        <label className={styles.container}>
            <input
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
            />
            <span className={styles.label}>{label}</span>
        </label>
    )
}

export default Checkbox