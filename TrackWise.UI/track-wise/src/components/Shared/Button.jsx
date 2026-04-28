import { buttonStyles } from "./button.style";

function Button({
    children,
    label,
    onClick,
    type = "button",
    disabled = false,
    variant = "primary",
    fullWidth = false,
    withSpacing = false,
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
                ${fullWidth ? buttonStyles.block : ""}
                ${withSpacing ? buttonStyles.spacingTop : ""}
                ${className}
            `}
        >
            {children || label}
        </button>
    );
}

export default Button;