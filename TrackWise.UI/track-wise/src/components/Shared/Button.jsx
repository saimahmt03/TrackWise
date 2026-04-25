import { buttonStyles } from "./button.style";

function Button({
    children,
    label,
    onClick,
    type = "button",
    disabled = false,
    variant = "primary",
    className = ""
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${buttonStyles.base}
                ${buttonStyles[variant]}
                ${className}
            `}
        >
            {children || label}
        </button>
    );
}

export default Button;