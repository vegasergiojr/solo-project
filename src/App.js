import './App.css';
import React, { Component } from 'react';
import NewsPost from './components/NewsPost';
import NewsHeader from './components/NewsHeader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTopHeadlines } from './store/PostActions';
import Footer from './components/Footer';
import Ads from './components/Ads';

class App extends Component {

    componentDidMount() {
        this.props.getTopHeadlines();
    }

    static propTypes = {
        getTopHeadlines: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired
    }

    render() {
        const { loading, news } = this.props
        return (
            <div className="main-body">
                <NewsHeader />
                <Ads />
                <NewsPost load={loading} posts={news} />
                <Footer />
            </div>
        )
    }
}

const mapToStateProps = state => ({
    news: state.posts.news,
    loading: state.posts.load
})

export default connect(mapToStateProps, { getTopHeadlines })(App)
