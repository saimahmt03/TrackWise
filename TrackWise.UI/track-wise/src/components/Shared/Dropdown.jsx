function Dropdown({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false
}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="">-- Select --</option>

                {options.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                        {opt.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;