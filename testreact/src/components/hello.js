import './hello.css';

const mouseOver = () => console.log("Mouse Over");
function Hello() {
    return (<div className='hello'>
        <div onMouseEnter={mouseOver} onClick={mouseOver}>привет, медведь</div>
        <h3>Привет участникам соревнований</h3>
        <div className="ass">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
    </div>
    );
};
export default Hello;