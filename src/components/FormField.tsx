import React from "react";

interface Iprops {
    className: string;
    label: string;
    htmlFor: string;
    type: string;
    id: string;
    value: string;
    small: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}

const FormField = (props: Iprops) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.htmlFor}>{props.label} </label>
            <input
                type={props.type}
                id={props.id}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
            />
            <small> {props.small} </small>
        </div>
    );
};

export default FormField;
