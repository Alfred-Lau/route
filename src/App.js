// import React from 'react'
// // import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom'

// ////////////////////////////////////////////////////////////
// // 1. Click the public page
// // 2. Click the protected page
// // 3. Log in
// // 4. Click the back button, note the URL each time

// const AuthExample = () => (
//   <Router>
//     <div>
//       <AuthButton/>
//       <ul>
//         <li><Link to="/public">Public Page</Link></li>
//         <li><Link to="/protected">Protected Page</Link></li>
//       </ul>
//       <Route path="/public" component={Public}/>
//       <Route path="/login" component={Login}/>
//       <PrivateRoute path="/protected" component={Protected}/>
//     </div>
//   </Router>
// )

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const AuthButton = withRouter(({ history }) => (
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => {
//         fakeAuth.signout(() => history.push('/'))
//       }}>Sign out</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ))

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     fakeAuth.isAuthenticated ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

// const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   }

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true })
//     })
//   }

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//     const { redirectToReferrer } = this.state

//     if (redirectToReferrer) {
//       return (
//         <Redirect to={from}/>
//       )
//     }

//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

// export default AuthExample

/* customer link :it is used to customize the Link component in your own style*/

// import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// const CustomLinkExample = () => (
//     <Router>
//         <div>
//             <OldLink activeOnlyWhenExact={true} to='/' label='home'/>
//             <OldLink to='/about' label='about' />

//             <Route exact path='/' component={Home}></Route>
//             <Route path='/about' component={About}></Route>
//         </div>
//     </Router>
// )

// const OldLink = ({activeOnlyWhenExact, to, label}) => (
//     <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
//         <div className={match ? 'active' : ''}>
//             {match ? '> ' : ''}<Link to={to}>{label}</Link>
//         </div>
//     )}></Route>
// )

// const Home = () => (
//     <div>
//         Home
//     </div>
// )

// const About = () => (
//     <div>
//         About
//     </div>
// )

// export default CustomLinkExample

/* prevent nav： the core concept is the usage of Prompt */

import React from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

const PreventingTransitionsExample = () => (
    <Router>
        <div>
            <ul>
                <li>  <Link to='/'> form
                </Link></li>
                <li><Link to='/one'> One
                </Link></li>
                <li><Link to='/two'> Two
                </Link></li>
            </ul>
            <Route path='/' exact component={Form}></Route>
            <Route path='/one' render={() => (
                <h3>one</h3>
            )}></Route>
            <Route path='/two' render={() => (
                <h3>two</h3>
            )}></Route>
        </div>
    </Router>
);

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false
        };
    }
    render () {
        const {isBlocking} = this.state;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                this.setState({
                    isBlocking:false
                });
            }}>
                {/*  cautions:the difference between () and {} ;*/}
                <Prompt when={isBlocking} message={(loc) => {
                    return `Are you sure you want to go to ${loc.pathname}`; 
                }}></Prompt>    
                <p>
          Blocking?
                    {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
                </p>
                <input
                    type="text"
                    placeholder='type something here'
                    onChange={(e) => {
                        this.setState({
                            isBlocking:e.target.value.length > 0
                        });
                    }}
                />   
                <button>submit</button>
            </form>
        );
    }
}


export default PreventingTransitionsExample;
