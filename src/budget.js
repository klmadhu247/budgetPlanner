import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './budget.css'
import Logo from './images/Logo.png' 

function Budget (){
    return(
        <div>
            
           <div className="conatainer-fluid">
           <div className=" d-flex  ">
           <div className="col-12 col-md-6 d-flex flex-column align-items-center bg-custom">
                <h1 className="heading pb-4">
                    <span className="blue-color">REACT</span>
                <span className="white-color"> BUDGET <br/> APP</span></h1>

                <img src={Logo} className="logo"/>
                
            </div>
            <div>
                <header className="ms-2 hdr"><h2>My Budget Planner</h2></header>
                <ul className="d-flex ms-2 ">
                    <li className="budget">Budget:<button className="btn btn-primary btn-budget ">Edit</button> </li>
                    <li className="remaining">Remaining: </li>
                    <li className="spent">Spent so far: </li>
                </ul>

                <div>
                    <h3>Expenses</h3>
                </div>
                <div>
                    <h3>Add Expenses</h3>

                    <div className=" row d-flex  ms-2">

                    <div className="form-group col-md-6 col-12">
                        <label className="form-label">Name</label>
                        <input className="form-control"/>

                    </div>
                    <div className="form-group col-md-5 col-12">
                        <label className="form-label">Cost</label>
                        <input className="form-control" />
                       
                    </div>
                    <button className="btn btn-primary col-md-3 ">Add</button>
                    
                    
                    </div>
                </div>

            </div>
                
                </div>
            
           


           </div>
        </div>
    )
}
export default Budget