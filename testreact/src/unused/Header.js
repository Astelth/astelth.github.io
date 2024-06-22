import React from "react";
import Button from "./Button";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    {this.props.title}
                    <Button />
                    <Button text='button' />
                    <Button />
                </header>
            </div>
        )
    }
}

export default Header;
