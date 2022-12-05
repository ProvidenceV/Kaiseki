import React from "react"

class CustomerNav extends React.Component{

    render(){
        return(
        <>
        <nav className="customerNav">
            <div className="customer-nav-wrapper">
                <div className="customer-view-1">
                    <a href="/about">About</a>
                </div>
                <div className="customer-view-2">
                    <a href="/reservation">Reservation</a>
                </div>
                <div className="customer-view-3">
                    <a href="/menu">Menu</a>
                </div>
                <div className="customer-view-4">
                    <a href="/bill">Bill</a>
                </div>
            </div>
        </nav>
        </>
    );
}
}
export default CustomerNav;