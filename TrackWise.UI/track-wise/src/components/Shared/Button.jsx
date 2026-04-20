function Button ({
    children,
    label,
    onClick,
    type = "button",
    disable = false,
    className = ""
}) {
    return (
        <button
            type = {type}
            onClick = {onClick}
            disabled = {disable}
            className = {className}
        >
            {children ? children : label}
        </button>
    );
}   

export default Button;