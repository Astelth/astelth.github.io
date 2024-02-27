import './hello.css';

const mouseOver = () => console.log("Mouse Over");
function Hello() {
    return (<div className='hello'>
        <h2 onMouseEnter={mouseOver} onClick={mouseOver}>превед, медвед</h2>
        <h3>Привет участникам соревнований</h3>
        <div className="ass">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Porro molestias eligendi omnis quisquam, ad laborum eius repellat
            voluptatibus fugiat cum ab illum sit eum perspiciatis!
        </div>
    </div>
    );
};
export default Hello;