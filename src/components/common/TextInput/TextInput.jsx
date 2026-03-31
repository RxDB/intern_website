import styles from './TextInput.module.css'

const InputField =({
    type,
    name,
    label,
    placeholder,
    value,
    onChange,
    multiline,
    icon,
})=>{
    return(
        <div className={styles.inputfield}>
            {label ? (
                <label htmlFor={name} className={styles.label}>{label}</label>
            ) : null}
            {multiline ? (
                <textarea
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${styles.input} ${styles.textarea}`}
                    rows={4}
                />
            ) : (
                <div className={styles.inputWrapper}>
                    {icon ? (
                        <span className={styles.icon} aria-hidden="true">{icon}</span>
                    ) : null}
                    <input
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`${styles.input} ${icon ? styles.inputWithIcon : ''}`}
                    />
                </div>
            )}
        </div>
    )
}

export default InputField
