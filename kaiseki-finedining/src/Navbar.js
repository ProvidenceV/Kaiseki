import CustomerNav from "./Customer/CustomerNav"
import RestaurauntNav from "./Restauraunt/RestaurauntNav"
import "./navbarstyle.css"
import {useState} from "react"


function Navbar(){
    const [view, setView] = useState("customer");

    let navType;  
   if(view === "customer"){
        navType = <CustomerNav />;
   }else if(view === "restauraunt"){
        navType = <RestaurauntNav />;
   }

    return(
        <>
        <nav className="nav">
            <div className="view-wrapper">
                <div className="view-customer">
                    <p id="customer" onClick={() => {setView("customer")}}>Customer</p>
                </div>
                <div className="view-restauraunt">
                    <p id="restauraunt" onClick={() => {setView("restauraunt")}}>Restauraunt</p>
                </div>
            </div>
            <hr className="break-view" />
            <div>
                {navType}
            </div>
        </nav>
        </>
    )
}
export default Navbar