
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { useState , useRef } from 'react';

function App() {
let [text , setText] =useState("");

let texteditor =(evt)=>{
  setText(evt.target.value);
  // console.log(text);
}
// ====================

let uppercase =()=>{
  let upper = text.toUpperCase();
  setText(upper);
  // let conf= confirm("are you sure?")
  // if(conf)
  // {
  //   let newtext= text.toUpperCase();
  // setText(newtext);
  // }
  // else{
  //  let lower= text.toLowerCase();
  //  setText(lower);
  // }
  
}
// =================
let lowercase =()=>{
  let lower = text.toLowerCase()
  setText(lower);
}
// =======================
let lengthText = text.length;
// console.log(lengthText);
// ========================
let wordlength= text.split(" " ).length;
let wordlength1 = wordlength - 1;
// =======================
let copyText = useRef(null);
// console.log(copyText);
let [btnText, setbtnText] = useState("COPY TEXT");
function textCopy(){
   let copy =  window.navigator.clipboard.writeText(text);
   if(copy){
    setbtnText("COPIED!"); 
   }
   else{
    useState("COPY TEXT!");  
   }
  
} 

  return ( 
    <>
    <Navbar  />
             
    <div className='container my-5' >
      <form action="">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto">
            <label className='my-3' htmlFor="u">write Your Text Here...</label>
          <textarea onChange={texteditor} value={text} ref={copyText} style={{border : "2px solid black "}} className='form-control' name="" id="u" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 ms-auto">
          <button onClick={uppercase} type='button' className='btn btn-primary my-3 mx-1' style={{borderRadius : "2px"}}>To Upper Case</button>
          <button onClick={lowercase} type='button' className='btn btn-danger my-3 mx-1' style={{borderRadius : "2px"}}>To Lower Case</button>
          <button  onClick={textCopy}  type='button' className='btn btn-warning my-3 mx-1' style={{borderRadius : "2px"}}>{btnText} </button>
          <button   type='clear' className='btn btn-info my-3 mx-1' style={{borderRadius : "2px"}}>Clear </button>
          </div>
          <div className="col-lg-4 col-md-12 col-12 me-auto">
             <h6 className='pt-3'>Total length of Your paragraph is: {lengthText} </h6>
             <h6 className='pt-2'>Total Words Of Your Paragraph is: {wordlength1} </h6>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
