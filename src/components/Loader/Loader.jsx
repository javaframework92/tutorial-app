import "./_loader.scss";
/**
 * Reusable Bootstrap Loader (Spinner) component for React.
 *
 * @param {string} type - The type of spinner ('border' or 'grow'). Defaults to 'border'.
 * @param {string} variant - The color variant (e.g., 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'). Defaults to 'primary'.
 * @param {string} text - Optional text to display next to or below the spinner.
 * @param {boolean} visuallyHidden - If true, the text will be visually hidden but available to screen readers.
 * @param {string} className - Additional CSS classes to apply to the container div.
 */
function Loader({
    type = 'border', // 'border' or 'grow'
    variant = 'primary', // 'primary', 'secondary', 'success', etc.
    text = 'Loading...',
    visuallyHidden = true, // Hide text visually but keep for accessibility
    className = ''
}) {
    const spinnerClass = `spinner-size spinner-${type} text-${variant} }`;
    const textClass = visuallyHidden ? 'visually-hidden' : '';

    return (
        <div className={`d-flex justify-content-center align-items-center loading-overlay  ${className}`}>
            <div className={spinnerClass} role="status">
                <span className={textClass}></span>
            </div>
            {!visuallyHidden && text && (
                <span className="ms-2">{text}</span> // Add some margin to the text if not hidden
            )}
        </div>
    );
}

export default Loader;