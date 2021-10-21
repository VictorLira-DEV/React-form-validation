import React  from "react";
import styles from "../styles/components/button/Button.module.css";

const Button: React.FC<{ className: string }> = (props) => {
    return (
        <button className={`${styles.button} ${props.className}`}>
            {props.children}
        </button>
    );
};

export default Button;
