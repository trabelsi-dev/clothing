import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument } from './firebase/firebase.utils';

class  App extends React.Component {
  constructor(){
    super();

    this.state = {currentUser : null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    // hedi taw fasarha ki tikmil section inclah 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      
      <BrowserRouter>
      <Header  currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopePage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App; 
