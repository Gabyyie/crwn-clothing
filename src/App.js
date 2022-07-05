import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {

  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
       <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/signIn' 
              render={() => 
              this.props.currentUser ? (
              <Redirect to='/'/>
              ) : (<SignInAndSignUpPage/> )}
              />
            </Switch>
       </BrowserRouter>
      </div>
    );
  }
  
  }

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
