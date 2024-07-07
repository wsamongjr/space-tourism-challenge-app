import "./button.scss";

const BUTTON_CLASES = {
    WRAPPER: "btn-wrapper",
    ROUND: "btn-wrapper btn-round",
};

export const Button = ({ children, variant, className, ...props }) => {
    const btnClass = BUTTON_CLASES[variant] || "";
    return (
        <button type="button" className={[btnClass, className].join(" ").trim()} {...props}>
            {variant === "ROUND" ? (
                <div className="btn-round-border">
                    <span className="color-very-dark-navy heading-small">{children}</span>
                </div>
            ) : (
                children
            )}
        </button>
    );
};

Button.propTypes = {};
