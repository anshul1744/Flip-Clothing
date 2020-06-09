import React, {  } from 'react';
import HomePage from '../src/pages/homepage/homepage.component'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component'
import Header from '../src/component/header/header.component'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in-and-sign-up.page';
import {auth,createUserProfileDocument} from '../src/firebase/firebase.utils'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  usubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
     if(userAuth){
      const useRef = await createUserProfileDocument(userAuth);
      useRef.onSnapshot(snapshot=>{
        this.setState({
          currentUser:{
          id:snapshot.id,
          ...snapshot.data()
          }
        })
      })
     }
     else{
       this.setState({currentUser:userAuth})
     }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path ='/' component={HomePage}/>
      <Route exact path ='/shop' component={ShopPage}/>
      <Route exact path ='/signin' component={SignInAndSignUpPage }/>

    </Switch>
    </div>
  );
}
}

export default App;
