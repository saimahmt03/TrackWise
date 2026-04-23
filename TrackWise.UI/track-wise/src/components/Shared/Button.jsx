function Button({
    children,
    label,
    onClick,
    type = "button",
    disabled = false,
    className = ""
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children || label}
        </button>
    );
}

export default Button;