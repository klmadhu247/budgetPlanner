import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './budget.css'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Logo from './images/Logo.png' 

function Budget (){

    const [purchaseList,setPurchaseList] = useState([])

    const [newItem,setNewItem] = useState({id:0,name:'',amount:0})


    const [budgetValue,setBudgetValue] = useState(parseInt (2000))

    const euro = '£';

    const [remaining,setRemaining] = useState(parseInt(budgetValue))

    const [spent,setSpent] = useState(0)

    const [expName,setExpName] = useState('')

    const [cost,setCost] = useState(0 )
    
    const [totalcost,setTotalCost] = useState(0)
    const [searchItem,setSearchItem] = useState('')
    
    const [filterItem,setFilterItem] = useState([])
   
    const handleName =(e)=>
    {
        setExpName(e.target.value)
    }
    const handleCost =(e)=>
    {
        setCost(parseInt(e.target.value))
    }
    

    const handleAdd =()=>
    {
        
       

        const newId = purchaseList.length ? purchaseList[purchaseList.length - 1].id + 1 : 0;
    const updatedItem = { id: newId, name: expName, amount: cost }
    setPurchaseList([...purchaseList, updatedItem])

    const listTotal = purchaseList.reduce((prev, current) => prev + current.amount, 0);
   
    
    setSpent(listTotal)
    setRemaining(remaining-cost)
    
  
    setCost('')
    setExpName('')
    
    
    
        console.log(expName,cost)
        console.log(purchaseList)
        console.log(listTotal)
      

    }
    const handleEdit =()=>
    {
        const updatedBudget = prompt('Update the Budget here', budgetValue)
        if(updatedBudget)
        {
            setBudgetValue(parseInt(updatedBudget))
            setRemaining(parseInt(updatedBudget))
            
        }

    }
    const handlSearchINPut =(e)=>
    {
        setSearchItem(e.target.value)
        
    }
    const handleSearh =()=>
    {
        const filtered = purchaseList.filter(list=>list.name.includes(searchItem))
        setFilterItem(filtered) 
        console.log(filterItem)
       

    }

    
   
    return(
        <div>
            
           <div className="container-fluid">
           <div className=" d-flex  ">
           <div className="col-12 col-md-5 d-flex flex-column align-items-center bg-custom">
                <h1 className="heading pb-4">
                    <span className="blue-color">REACT</span>
                <span className="white-color"> BUDGET <br/> APP</span></h1>

                <img src={Logo} className="logo"/>
                
            </div>
            <div>
                <header className="ms-2 hdr"><h2>My Budget Planner</h2></header>
                <ul className="d-flex ms-2 ">
                    <li className="budget">Budget: {euro}{budgetValue}
                        <button onClick={handleEdit} className="btn btn-primary btn-budget ">Edit</button> </li>
                    <li className="remaining">Remaining: {euro} {remaining} </li>
                    <li className="spent">Spent so far:{euro} {spent} </li>
                </ul>

                <div>
                    <h3>Expenses</h3>
                  <div className="d-flex align-items-center justify-content-around col-12 ">
                    <input className='form-control ms-2 mb-2 rounded border border-2' onChange={handlSearchINPut}type="text" placeholder="search" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="custom-icon ms-3 cl-12 " onClick={handleSearh}/>
                   
                    </div> 
                    <div>
                    {filterItem.map((item,id)=>
                    {
                        <div>{item.name}   {item.amount}</div>
                    })}

                    </div>
                    


                    {purchaseList.map((purchase,index)=>
                    <div key={index} className=" exp_List">
                        <div className="name">{purchase.name}</div>
                        <div className="amount bg-primary">{euro}{purchase.amount}</div>

                        </div>
                    
                    )}
                    
                </div>
                <div>
                    <h3>Add Expenses</h3>

                    <div className=" row d-flex justify-content-between  ms-1">

                    <div className="form-group col-md-6 col-12">
                        <label className="form-label">Name</label>
                        <input value={expName} onChange={handleName} className="form-control rounded border border-2 "/>

                    </div>
                    <div className="form-group col-md-5 col-12">
                        <label className="form-label">Cost</label>
                        <input value={cost} onChange={handleCost} className="form-control rounded border border-2" type="number"  />
                       
                    </div>
                    <div className="col-md-1 d-flex align-items-end">
        <button onClick={handleAdd} className="btn btn-primary w-150">Add</button>
      </div>
                    
                    
                    </div>
                </div>

            </div>
                
                </div>
            
           


           </div>
           
        </div>
    )
}
export default Budget