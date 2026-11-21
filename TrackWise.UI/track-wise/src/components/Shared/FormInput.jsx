import { formInputStyles } from "./forminput.style";

function FormInput({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    required = false
}) {
    return (
        <div className={formInputStyles.container}>
            <label htmlFor={name} className={formInputStyles.label}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                className={formInputStyles.input}
            />
        </div>
    );
}

export default FormInput;