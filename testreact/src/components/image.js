import React from "react";
import styles from './image.css';

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.image} className={styles.image} />
        )
    }
}

export default Image;