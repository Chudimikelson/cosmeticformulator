import React, { Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Checkout from './components/checkout/Checkout';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Home from './components/Home';
import Helmet from 'react-helmet';
import Diy from './components/Diy';
import Bestsells from './components/Bestsells';
import Collection from './components/Collection';
import Collections from './components/Collections';

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
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/bestseller" component={Bestsells} />
          <Route path="/collection" component={Collection}/>
          <Route path="/collections" component={Collections}/>
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/shop" component={ProductList}/>
          <Route path="/DIY" component={Diy}/>
          <Route component={Default} />
        </Switch>
        <Modal/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;