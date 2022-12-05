import React from 'react';

const Footer = () => {
    return(
        <>
        <footer>
            <div className="main-footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-col">
                         <h4>
                            Contact us at 555-555-5555
                            123 Imaginary Place Way, XX, USA 12345
                        </h4>
                        </div>
                        <div className="footer-col">
                        </div>
                        <div className="footer-col">
                         <h4>
                            Other information here
                        </h4>
                        </div>
                    </div>
                </div>
            <hr className="break-view"/>
            <div>
                <p>{new Date().getFullYear()} Kaiseki Ltd | All Rights Reserved | Terms of Service | Privacy</p>
            </div>
            </div>
        </footer>
        </>
    )
}
export default Footer