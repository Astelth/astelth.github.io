// ReactDOM.render(<div>
//     <h1>Hello world</h1>
//     <div>привет </div>
//     </div>, document.getElementById("app")
//     );

const inputClick = () => { console.log('Clicked') };
const mouseOver = () => { console.log('Mouse over') };
const helpText = "Help text!!!";

const elements = (
    <div classname="name">
        <h1>{helpText}</h1>
        <input placeholder={helpText}
            onClick={inputClick} onMouseEnter={mouseOver} />
            <p>{helpText==="Help text!!!" ? "Yes" : "No"}</p>
    </div>
);
const app = document.getElementById("app");
ReactDOM.render(elements, app);
