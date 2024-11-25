// import { useState } from "react";
// import { FirstComponent } from "./components/FirstComponent";
// import { useRef} from "react" 
// import Todoitems from "./Components/TodoItems";

import Todo from "./Components/Todo"

export const App = () => {
  // const inputRef=useRef(null);
  // const [data,setData] =useState([]);
  // let x ="Coach Husam";
  // let arr=['user1','user2','user3'];
  // let data ="boy";
  // let x =0;
  // const [x,setx] = useState(0);
  // const btnClick =() => {
  //   console.log("Clicked");
  //   // x++;
  //   setx(x+1);
  //   console.log(x);
  // }

  return (
    <div>


      {/* <FirstComponent data={x} fn={setx} /> */}

    {/* {x}
    {arr.map((user)=>{return <h2>{user}</h2>})} */}
    {/* {data==="boy"?<h1>Boy</h1>:<h1>girl</h1> */}

{/* } */}
{/* {x} */}
    {/* <button onClick={()=>{btnClick()}}>Click Me</button> */}
      {/* <input type="text" ref={inputRef} /> */}
      {/* <button onClick={()=>{console.log(inputRef.current.value);}}>Submit</button> */}
      {/* <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}; */}
      <Todo/>


    </div>
  )
}
export default App