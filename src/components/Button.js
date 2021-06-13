import styled from "styled-components";

const Button = styled.button`
    background-color: #8e44ad;
    border: 2px solid #8e44ad;
    color: #fff;
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 30px;
    transition: 0.5s;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);

    &:hover {
        background-color: #783496;
    }
`;

export default Button;
