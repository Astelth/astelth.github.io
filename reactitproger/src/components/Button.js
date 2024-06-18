import React from "react";

const Button = (props) => {
        return (
            <button className="button">{ props.text }</button>
        )
}

Button.defaultProps = {
    text: 'Кнопка',
}

export default Button;
