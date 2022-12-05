import React from "react"

class RestaurauntNav extends React.Component{

    render(){
        return(
            <>
            <nav className="restaurauntNav">
            <div className="restauraunt-nav-wrapper">
                <div className="restauraunt-view-1">
                    <a className="navlinks" href="/restaurauntMetrics">Metrics</a>
                </div>
                <div className="restauraunt-view-2">
                    <a className="navlinks" href="/restaurauntReservation">Reservation</a>
                </div>
                <div className="restauraunt-view-3">
                    <a className="navlinks" href="/restaurauntOrdering">Ordering</a>
                </div>
                <div className="restauraunt-view-4">
                    <a className="navlinks" href="/restaurauntSchedule">Schedule</a>
                </div>
            </div>
            </nav>
            </>
    );
}
}
export default RestaurauntNav;