import React from "react";

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.image} className={this.props.className} alt='изображение' />
        )
    }
}

export default Image;