import React from 'react'

function Footer() {
    return (
        <footer>
            <h1 className="foot-header">References</h1>
            <div className='footer-flex'>
                <div className="footer-cards">
                    <h2>News API</h2>
                    <ul>
                        <li className="lists"><a href="https://newsapi.org/docs/get-started">Get started</a></li>
                        <li className="lists"><a href="https://newsapi.org/docs">Documentation</a></li>
                    </ul>
                </div>
                <div className="footer-cards">
                    <h2>Images</h2>
                    <ul>
                        <li className="lists"><a href="https://unsplash.com/photos/yf9hEzG8EKI">Jason Leung</a></li>
                        <li className="lists"><a href="https://unsplash.com/photos/VzJjPuk53sk">Procreator UX Design Studio</a></li>
                    </ul>
                </div>
                <div className="footer-cards">
                    <h2>GitHub Link</h2>
                    <ul>
                        <li className="lists"><a href="https://newsapi.org/docs/get-started">Checkout the code</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

