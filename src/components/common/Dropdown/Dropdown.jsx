import styles from './Dropdown.module.css'

const Dropdown = ({
    name,
    label,
    value,
    onChange,
    options = [],
}) => {
    return (
        <div className={styles.dropdown}>
            <label htmlFor={name} className={styles.label}>
                {label ?? name}
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className={styles.select}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown
