import './Button.css'

const Button = function (props) {
    return (
        <button>{props.children}</button>
    )
}

export default Button;