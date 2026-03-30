import styles from '../Radio/Radio.module.css'

const Checkbox = ({
    name,
    label,
    value,
    onChange,
    checked,
})=>{
    return(
        <label className={styles.container}>
            <input
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                className={styles.input}
                checked={checked}
            />
            <span className={styles.label}>{label}</span>
        </label>
    )
}

export default Checkbox