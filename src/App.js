import React, { Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Checkout from './components/checkout/Checkout';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Home from './components/Home';
import Helmet from 'react-helmet';
import AllButters from './components/AllButters';
import ButterSingle from './components/ButterSingle';
import MobileMenu from './components/MobileMenu';
import AllOils from './components/AllOils';
import AllPowders from './components/AllPowders';

class App extends Component {
  render() {
    return (
      <React.Fragment>
              <Helmet>
              <meta charSet="utf-8" />
        <title>Cosmetic Formulator Depot </title>
        <meta name="description" content="description"
        />
        </Helmet>
        <Navbar className='bbn'/> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/BUTTERS" component={AllButters}/>
          <Route path="/OILS" component={AllOils}/>
          <Route path="/POWDERS" component={AllPowders}/>
          <Route path="/details" component={Details} />
          <Route path="/checkout" component={Checkout} />
          <Route component={Default} />
        </Switch>
        <Modal/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;