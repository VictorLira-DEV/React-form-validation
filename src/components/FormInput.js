function FormInput(props) {
    return (
        <div className={props.className}>
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                onChange={props.onChangeHandler}
            />
            <small>error message</small>
        </div>
    )
}
export default FormInput;