import { dropdownStyles } from "./dropdown.style";

function Dropdown({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false,
    disabled = false,
    className = ""
}) {
    return (
        <div className={dropdownStyles.container}>
            {label && (
                <label htmlFor={name} className={dropdownStyles.label}>
                    {label}
                </label>
            )}

            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`
                    ${dropdownStyles.select}
                    ${className}
                `}
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