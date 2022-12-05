export default function Reservations(){
    return(
        <>
        <div>
            <div className="reservation-form">
                <h1>Reservations</h1>
                <p>First Name:</p>
                <input type="text" data-field="first-name" />
                <p>Last Name:</p>
                <input type="text" data-field="last-name" />
                <p>Phone Number:</p>
                <input type="text" data-field="phone-number" />
                <p>Email:</p>
                <input type="text" data-field="email" />
                <p>Number of People:</p>
                <input type="text" data-field="partysize" />
                <p>Date</p>
                <input type="text" data-field="date" />
                <p>Time</p>
                <input type="text" data-field="time" />
                <button>Submit</button>
            </div>
        </div>
        </>
    )
}