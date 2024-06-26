import './hello.css';
import React from 'react';
import Image from './image';
import logo from '../img/logo.svg';

const mouseOver = () => console.log("Mouse Over");
const helloClick = () => console.log("Mouse click");
let ass = "";
let assClick = () => {
    ass = ass + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ";
    console.log("Ass  click");
};
class Hello extends React.Component {
    render() {
        return (<div className='hello'>
            <div onClick={helloClick} onMouseOver={mouseOver}>{this.props.title}</div>
            <h3 className='title'>Привет участникам соревнований</h3>
            <div className="ass" onClick={assClick}>
                тест  {this.ass}
            </div>
            <div className="image">
                <Image image={logo} />
            </div>
        </div>
        );
    }
};
export default Hello;