import React, { Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Checkout from './components/checkout/Checkout';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Home from './components/Home';
import Helmet from 'react-helmet';
import AllButters from './components/c.OilsAndButters/AllButters';
import Surfactants from './components/c.Surfactants/Surfactants';
import EmulStabilizers from './components/c.Emulsifiers/EmulStabilizers';
import PowdersExtracts from './components/c.PowdersExtracts/PowdersExtracts';
import ActivesPreservatives from './components/c.ActivesPreservatives/ActivesPreservatives';
import OilsCategory from './components/AllOils';
import ActivsCategory from './components/AllActivs';
import PreservsCategory from './components/AllPreservs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cosmetic Formulator Depot </title>
          <meta name="description" content="description"/>
        </Helmet>
        <Navbar className='bbn'/> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/OILS-and-BUTTERS" component={AllButters}/>
          <Route path="/SURFACTANTS" component={Surfactants}/>
          <Route path="/STABILIZERS" component={EmulStabilizers}/>
          <Route path="/POWDERS-and-EXTRACTS" component={PowdersExtracts}/>
          <Route path="/ACTIVES-and-PRESERVATIVES" component={ActivesPreservatives}/>
          <Route path="/OILS-CATEGORY" component={OilsCategory}/>
          <Route path="/ACTIVES" component={ActivsCategory}/>
          <Route path="/PRESERVATIVES" component={PreservsCategory}/>
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