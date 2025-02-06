import React, {useState } from "react";
import './App.css'
import BillDetails from "./BillDetails";
import { GrNotes } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

import logo3 from './images/logo3.png'

import img1 from './images/pic1.png'
import img2 from './images/pic2.png'
import img3 from './images/pic3.png'
import img4 from './images/pic4.png'
import img5 from './images/pic5.png'
import img6 from './images/pic6.png'
import img7 from './images/pic7.png'
import img8 from './images/pic8.png'
import img9 from './images/pic9.png'
import img10 from './images/pic10.png'
import img11 from './images/pic11.png'
import img12 from './images/pic12.png'
import img13 from './images/pic13.png'
import img14 from './images/pic14.png'
import img15 from './images/pic15.png'
import img16 from './images/pic16.png'
import img17 from './images/pic17.png'
import img18 from './images/pic18.png'
import img19 from './images/pic19.png'
import img20 from './images/pic20.png'

export default function App(){

const product=[{
    id:1,
    Name:"Apple",
    Img:img1,
    Price:300,
  },
  {
    id:2,
    Name:"Blue Berry",
    Img:img2,
    Price:100,
  },
  {
    id:3,
    Name:"Cherry",
    Img:img3,
    Price:150,
  },
  {
    id:4,
    Name:"Graps",
    Img:img4,
    Price:170,
  },
  {
    id:5,
    Name:"Guva",
    Img:img5,
    Price:440,
  },
  {
    id:6,
    Name:"Mango",
    Img:img6,
    Price:190,
  },
  {
    id:7,
    Name:"Orange",
    Img:img7,
    Price:100,
  },
  {
    id:8,
    Name:"Papaya",
    Img:img8,
    Price:100,
  },
  {
    id:9,
    Name:"PineApple",
    Img:img9,
    Price:100,
  },
  {
    id:10,
    Name:"Pomogranate",
    Img:img10,
    Price:100,
  },
  {
    id:11,
    Name:"Strawberry",
    Img:img11,
    Price:100,
  },
  {
    id:12,
    Name:"Watermeloan",
    Img:img12,
    Price:100,
  },
  {
    id:13,
    Name:"Pear",
    Img:img13,
    Price:100,
  },
  {
    id:14,
    Name:"Plum",
    Img:img14,
    Price:100,
  },
  {
    id:15,
    Name:"Apricot",
    Img:img15,
    Price:100,
  },
  {
    id:16,
    Name:"Lime",
    Img:img16,
    Price:100,
  },
  {
    id:17,
    Name:"Coconut",
    Img:img17,
    Price:100,
  },
  {
    id:18,
    Name:"Bectarine",
    Img:img18,
    Price:100,
  },
  {
    id:19,
    Name:"Lychee",
    Img:img19,
    Price:100,
  },
  {
    id:20,
    Name:"Kiwi",
    Img:img20,
    Price:100,
  }
]

let [bill,setBill]=useState(false);
let [search,setSearch]=useState(false);
let [count,setCount]=useState(0);
let [propsobj,setPropsobj]=useState([]);
let [inp,setInp]=useState("")
let [total,setTotal]=useState(0)
let [howmany,setHowmany]=useState([])

//bill icon click->TO show a bill details
function billFun(){
  setBill(!bill)
}

//Click to seacrh icon visiblea and hide
function SearchChange(){
  setSearch(!search)
}


function IncreaseCount(getProps){
  //Count increase
    setCount(count+1)

  //billing section adding item name and price
    let result=propsobj.some((item)=>item.id===getProps.id)
    if(!result){
      setPropsobj((data)=>[...data,getProps])
    }


  //Total bill
    setTotal(()=>total+getProps.price)

  //How many time product want x2
    setHowmany((data)=>[...data,getProps.id])
  }

//gettig input value and set to the inp state
function getInp(val){
    setInp(val.target.value)
}

//Clear bill
function ClearBill(){
  setPropsobj([])
  setCount(0)
  setTotal(0)
}


  return(
    <>
      <div className="Overall">
        {/*---------------- NavBar ----------------*/}
        <div className="navBar">
          <div className="logo">
            <img src={logo3}/>
            <h1><span>Fruit</span> Hunt</h1>
          </div>
          <div>
            {search?<input type="text" placeholder="Search here..." onChange={getInp}/>:null}
            <FaSearch className="billIcon search" onClick={SearchChange}/>
            <div className="billCount">
            <GrNotes className="billIcon" onClick={billFun}/>
            {count!=0?<p>{count}</p>:null}
            </div>
          </div>
        </div>
       
       {/*---------------------- Contant ----------------------*/}
       <div className="Contant">
          <div className="left">
          {product.map((item)=>(
            <>{inp!==undefined?
              (item.Name.toLowerCase().includes(inp.toLowerCase())? <BillDetails id={item.id} image={item.Img} name={item.Name} price={item.Price} fun={IncreaseCount}/>:null)
          :null}
            </>
            ))}
          </div>
          {/*-------------------------Billing Section--------------------*/}
          <div className={`right ${bill?"":"hide"}`}>
              <div>
                <p>Billing Details--------</p>
                <table>
                  <tbody>
                    
                      {propsobj.map((it)=>
                      <tr>
                          <td>{it && it.name}</td>
                          {/*--------------------- x2 --------------*/}
                          <td>× {howmany.filter((item)=>item==it.id).length}</td>
                          <td>{it && it.price} Rs</td>
                      </tr>
                      )
                    }
                  </tbody>                 
                </table>
                <div className="total">
                  <p>Total</p>
                  <p>{total} Rs</p>
                </div>
              </div>
              <div className="btnDiv">
                  <button onClick={ClearBill}>Clear Bill</button>
                  <button onClick={billFun}>Close</button>
              </div>
          </div>
       </div>
      </div>
    </>
  )
}