import styles from './TextInput.module.css'

const InputField =({
    type,
    name,
    label,
    placeholder,
    value,
    onChange,
    multiline,
})=>{
    return(
        <div className={styles.inputfield}>
            <label htmlFor={name} className={styles.label}>{label}</label>
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
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={styles.input}
                />
            )}
        </div>
    )
}

export default InputField