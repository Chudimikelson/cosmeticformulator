import React, { Component } from 'react';
import {storeProducts, detailProduct, lookup} from './data';


const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(){
    super();
    this.getLocation = this.getLocation.bind(this);
    this.getMethod = this.getMethod.bind(this);
    this.getSize = this.getSize.bind(this);
  }
    state ={
        products: [],
        detailProduct:detailProduct,
        cart: [],
        modalOpen: false,
        sidebarOpen: false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        location: "Abuja",
			  method: 'regular',
        shipping:1000,
        size: 0
    };
    componentDidMount(){
      this.setProducts();
    }
    setProducts = () => {
      let tempProducts = [];
      storeProducts.forEach(item => {
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
      });
      this.setState(() => {
        return {products: tempProducts};
      });
    };

    getItem = (id) => {
      const product = this.state.products.find(item => item.id ===id);
      return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return {detailProduct:product}
        })
    };
    getSize = (e) => {
      console.log(e.target.value);
      let size= e.target.value;
      this.setState(()=>{
        return {size: size};
      });
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = this.state.size;
        product.total = price;
        this.setState(() => {
          return {products:tempProducts, cart:[...this.state.cart, product]};
        }, () => {
          this.addTotals();
        });
    };
    
    openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct:product, modalOpen:true}
    })
  };
  
  closeModal = () => {
    this.setState(() => {
      return {modalOpen:false};
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item =>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count +1;
    product.total = product.count * product.price;
    

    this.setState(
      ()=>{
        return{cart:[...tempCart]};
      },
      ()=>{
        this.addTotals();
      });
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item =>item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    
    if (product.count === 0){
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        ()=>{
          return{cart:[...tempCart]};
        },
        ()=>{
          this.addTotals();
        });
    }


  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id!==id);
    const index = tempProducts.indexOf(this.getItem(id));
    
    let removedProduct = tempProducts[index];
    if (removedProduct)  {
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
    } 

    this.setState(() => {
      return {
        cart:[...tempCart],
        products:[...tempProducts]
      };
    }, () => {this.addTotals();
    });
  };
  clearCart = () => {
    this.setState(() => {
      return {cart:[]};
    }, () => {
      this.setProducts();
      this.addTotals();
    });
  };

  getMethod = (e) => {
    let location = this.state.location;
    let method = e.target.value;
    this.setState({
      method:method
    });
    this.getFee(location);
  };
  getLocation = (e) => {
    let location = e.target.value;
    this.setState({location:location
    });
    this.getFee(location);
  };

  getFee = (location) => {
    let fee = "";
    fee = lookup[location];
    this.setState({shipping:fee
    }, this.addTotals);
  };
  
  // setDeliveryFee = (location) => {
  //   let fee = this.state.shipping;
  //   if (location !== "Abuja") {
  //     fee = 3500;
  //   };
  //   this.setState(() => {
  //     return {shipping:fee};
  //   });
  // };
  addTotals = () => {
    let method = this.state.method;
    let location = this.state.location;
    let sfee = this.state.shipping;
    let subTotal = 0;
    this.state.cart.map( item => (subTotal += item.total));
    if (method !== "regular" && location !== "Abuja") {
      sfee += 2000;
    }
    const total = subTotal + sfee;
    this.setState(() => {
      return {
        cartSubTotal:subTotal,
        shipping:sfee,
        cartTotal:total
      }
    });
  };
    render() {
        return (
            <ProductContext.Provider value={{...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                getLocation:this.getLocation,
                getMethod:this.getMethod,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                getSize:this.getSize
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};