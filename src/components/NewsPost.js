import React from 'react'

const NewsPost = ({ load, posts }) => {

    if (load) {
        return <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }
    return (
        <div className="card-container">
            <div className="cards">
                {(posts || []).map((news, i) => (
                    <div className="card-body" key={i}>
                        <h3 className="card-title">{news.title}</h3>
                        <img className="card-image" src={news.urlToImage} alt={news.description}></img>
                        <p className="card-author">Author: {news.author}</p>
                        <a className="card-anchor" href={news.url}>Go to article {news.source.id}</a>
                        <p className="card-description">{news.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewsPost;