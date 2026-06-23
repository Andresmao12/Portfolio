import styles from './InputLabel.module.css'

type types = 'input' | 'textArea' | 'email';

interface InputLabelProps {
    id: string,
    label: string,
    type: types,
    value: string,
    onChange: (value: string) => void,
    required?: boolean
}

const InputLabel = ({ id, label, type, value, onChange, required = true }: InputLabelProps) => {

    return <div className={styles.field}>

        {type == 'input' && <input
            type="text"
            id={id}
            name={id}
            value={value}
            placeholder=" "
            required={required}
            onChange={(e) => onChange(e.target.value)}
        />}

        {type == 'email' && <input
            type="email"
            id={id}
            name={id}
            value={value}
            placeholder=" "
            required={required}
            onChange={(e) => onChange(e.target.value)}
        />}

        {type == 'textArea' && <textarea
            id={id}
            name={id}
            value={value}
            rows={6}
            placeholder=" "
            required={required}
            onChange={(e) => onChange(e.target.value)}
        />}

        <label htmlFor={id}>{label}</label>

    </div>
}

export default InputLabel