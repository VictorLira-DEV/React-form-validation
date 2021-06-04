import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    position: relative;

    & label{
        display: inline-block;
        margin-bottom: 3px;
        color: rgb(68, 68, 68);
    }

    & input{
        padding: 10px;
        border: 1px solid ${props => (props.isvalid ? 'red' : '#ccc')};
        outline: none;
    }

    & small{
        position: absolute;
        bottom: -20px;
        color: red;
        visibility: ${props => (props.isvalid ? 'visible' : 'hidden')};
    }
`

function FormInput(props) {
    return (
        <FormControl isvalid={props.booleano}>
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                onChange={props.onChangeHandler}
                placeholder={props.placeholder}
            />
            <ErrorMessage>{ props.errorMessage }</ErrorMessage>
        </FormControl>
    )
}
export default FormInput;