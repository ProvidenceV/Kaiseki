
import React from "react"

class RestaurauntNav extends React.Component{

    render(){
        return(
            <>
            <nav className="restaurauntNav">
            <div className="restauraunt-nav-wrapper">
                <div className="restauraunt-view-1">
                    <a href="/restaurauntMetrics">Metrics</a>
                </div>
                <div className="restauraunt-view-2">
                    <a href="/restaurauntReservation">Reservation</a>
                </div>
                <div className="restauraunt-view-3">
                    <a href="/restaurauntOrdering">Ordering</a>
                </div>
                <div className="restauraunt-view-4">
                    <a href="/restaurauntSchedule">Schedule</a>
                </div>
            </div>
            </nav>
            </>
    );
}
}
export default RestaurauntNav;