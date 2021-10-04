import React from 'react'

function Ads(){
    return(
        <div className="ad-test">
            <div className="ad-cards">
                <h3>Learn to code at Digitalcrafts.</h3>
                <p>Fake Ad.</p>
                <img className="ad-image" src="https://tinyurl.com/98nua3nv" alt="person coding"></img>
                <a href="https://www.digitalcrafts.com/">click here to learn more!</a>
            </div>
            <div className="ad-cards">
                <h3>Need a new Mac? We got your covered!</h3>
                <p>Fake Ad.</p>
                <img className="ad-image" src="https://tinyurl.com/2u2hahfs" alt="person coding"></img>
                <a href="https://www.bestbuy.com/">Visit Electronics and More!</a>
            </div>
        </div>
    )
}
export default Ads