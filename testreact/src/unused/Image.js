import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.image} className="logo" alt='изображение' />
        )
    }
}

export default Image;