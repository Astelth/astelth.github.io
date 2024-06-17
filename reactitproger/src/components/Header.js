import React from "react";
import Button from "./Button";

class Header extends React.Component {
    render() {
        return (
            <div>
            <header className="header">{ this.props.title }</header>
            <Button text='привет' />
            </div>
        )
    }
}

export default Header;
