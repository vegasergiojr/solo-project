import React from 'react'


function NewsHeader() {
    return (
        <div className="header-container">
            <img className="news-logo" src="https://tinyurl.com/7ptt2we7" alt="news logo"></img>
            <h1 className="news-header">USA News</h1>
            <div className="search-container">
                <input className="filter-news" type="text" placeholder="Filter News"></input>
                <button className="filter-button">Search</button>
            </div>
        </div>

    )
}

export default NewsHeader