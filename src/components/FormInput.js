import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const FormControl_styled = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    position: relative;

    & label{
        display: inline-block;
        margin-bottom: 3px;
        color: ${props => (props.isvalid ? 'red' : 'black')}
    }

    & input{
        padding: 10px;
        border: 1px solid ${props => (props.isvalid ? 'red' : 'black')};
        outline: none;
    }

    & small{
        position: absolute;
        bottom: -19px;
        visibility: hidden;
    }
`

function FormInput(props) {
    return (
        <FormControl_styled isvalid={props.booleano}>
            <label for={props.id}>{props.children}</label>
            <input
                type={props.type}
                id={props.id}
                onChange={props.onChangeHandler}
                placeholder={props.placeholder}
            />
            <ErrorMessage>{ props.errorMessage }</ErrorMessage>
        </FormControl_styled>
    )
}
export default FormInput;