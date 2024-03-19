import './hello.css';
import React from 'react';

const mouseOver = () => console.log("Mouse Over");
const helloClick = () => console.log("Mouse click");
class Hello extends React.Component {
    render() {
        return (<div className='hello'>
            <div onClick={helloClick} onMouseOver={mouseOver}>{this.props.title}</div>
            <h3>Привет участникам соревнований</h3>
            <div className="ass">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
        );
    }
};
export default Hello;