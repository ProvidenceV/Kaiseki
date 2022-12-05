import CustomerNav from "./Customer/CustomerNav"
import RestaurauntNav from "./Restauraunt/RestaurauntNav"
import "./navbarstyle.css"

const state = {
    view: "customer"
};  

export default function Navbar(){

   

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
                {state.view === "customer" ? <CustomerNav /> : <RestaurauntNav /> }
            </div>
        </nav>
        </>
    )
}