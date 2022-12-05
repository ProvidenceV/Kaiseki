import CustomerNav from "./Customer/CustomerNav"
import RestaurauntNav from "./Restauraunt/RestaurauntNav"
import "./navbarstyle.css"



function Navbar(){
    const state = {
        view: "customer"
    };
    let navType;  
   if(state.view === "customer"){
        navType = <CustomerNav />;
   }else if(state.view === "restauraunt"){
        navType = <RestaurauntNav />;
   }
   //why doesn't this update
   if(window.location.pathname === "Restauraunt"){
        navType = <RestaurauntNav />;
   }
   else if(window.location.pathname === "Customer"){
        navType = <CustomerNav />;
   }

    return(
        <>
        <nav className="nav">
            <div className="view-wrapper">
                <div className="view-customer">
                    <p id="customer" onClick={() => {state.view = "customer"}}>Customer</p>
                </div>
                <div className="view-restauraunt">
                    <p id="restauraunt" onClick={() => {state.view = "restauraunt"}}>Restauraunt</p>
                </div>
            </div>
            <ul>
                <li>
                    <a href="/Customer">Customer</a>
                </li>
                <li>
                    <a href="/Restauraunt">Restauraunt</a>
                </li>
            </ul>
            <div>
                {navType}
            </div>
        </nav>
        </>
    )
}
export default Navbar