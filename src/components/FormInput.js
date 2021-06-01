import ErrorMessage from './ErrorMessage'

function FormInput(props) {
    return (
        <div className={props.className}>
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                onChange={props.onChangeHandler}
                placeholder={props.placeholder}
            />
            <ErrorMessage>{ props.errorMessage }</ErrorMessage>
        </div>
    )
}
export default FormInput;