import styles from './Dropdown.module.css'

const Dropdown = ({
    name,
    label,
    value,
    onChange,
    options = [],
    selectClassName = '',
}) => {
    return (
        <div className={styles.dropdown}>
            <label htmlFor={name} className={styles.label}>
                {label }
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className={`${styles.select} ${selectClassName}`.trim()}
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
