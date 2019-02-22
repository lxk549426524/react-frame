import React, { Component } from 'react';
import Header from 'comp/header';
import Layout from 'comp/layout';
import RouteView from 'route';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    render() {
        return <div className='app'>
                <Header></Header>
                <Layout>
                    <Router>
                        <RouteView/>
                    </Router>
                </Layout>
            </div>
    }
}

export default App;