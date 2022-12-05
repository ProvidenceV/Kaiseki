export default function Bill(){
    return(
        <>
        <div className="bill-container-parent">
            <div className="bill-container-child">
            <p>Bill goes here</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Quanity</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Seared Scallops</td>
                    <td>Beef Wellington</td>
                    <td>Orange Souflee</td>
                </tr>
                <tr>
                    <td>$40.00</td>
                    <td>$150.00</td>
                    <td>$20.00</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
            <div>
                <p>Would you like to add a tip</p>
                <button>yes</button>
                <button>no</button>
                <button>15%</button>
                <button>20%</button>
                <button>25%</button>
                <p>Other</p>
                <input type="text" data-field="tip" />
            </div>
            <h2>How will you be paying</h2>
            <button>Cash</button>
            <button>Card</button>
            {/*  if cash instructions to go to waiter */}  
            {/* if card then go to payment screen*/}
            <p>Card Number</p>
            <input type="text" data-field="card-number" />
            <p>Card Holder</p>
            <input type="text" data-field="card-holder" />
            <p>Expiration Date</p>
            <input type="text" data-field="card-date" />
            <p>CCV</p>
            <input type="text" data-field="card-ccv" />
            <button>Submit</button>
            <p>Your information is securely processed by BigBankCorperation</p>
            </div>
        </div>
        </>
    )
}