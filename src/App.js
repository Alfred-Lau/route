import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

const NotMatch = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'> Home
                    </Link>
                </li>
                <li>
                    <Link to='/old-match'> old match to be redirect
                    </Link>
                </li>
                <li>
                    <Link to='/will-match'> will match
                    </Link>
                </li>
                <li>
                    <Link to='/not-match'> not match
                    </Link>
                </li>
                <li>
                    <Link to='/also-not-match'> also not match
                    </Link>
                </li>
            </ul>
            {/* remember to add the Route and Redirect inside the Switch */}
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Redirect from='/old-match' to='/will-match'></Redirect>
                <Route path='/will-match' component={WillMatch}></Route>
                <Route component={NoMatch}></Route>
            </Switch>
        </div>
    </Router>
);

const Home = () => (
    <div>
    Home
    </div>
);

const WillMatch = () => (
    <div>
    will match
    </div>
);

const NoMatch = ({location}) => (
    <div>
        {`this is no match for ${location.pathname}`}
    </div>
);

export default NotMatch;
