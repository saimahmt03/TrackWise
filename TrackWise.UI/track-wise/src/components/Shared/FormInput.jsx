function FormInput ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    required = false
}) {
    return (
        <div>
            <label htmlFor = {name}>{label}</label>

            <input
                id = {name}
                name = {name}
                type = {type}
                value = {value}
                placeholder = {placeholder}
                required = {required}
                onChange = {onChange}
            />
        </div>
    );  
}

export default FormInput;