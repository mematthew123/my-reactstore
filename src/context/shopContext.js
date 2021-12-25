import { Menu } from '@chakra-ui/menu';
import React, { Component } from 'react'
import client from 'shopify-buy'

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN, 
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API 
  });
  




  class ShopProvider extends Component {
    state = {
      products: [],
      product: {},
      checkout: {},
      isCartOpen: false,
      isMenuOpen: false
    };

createCheckout = async () => {

}

fetchCheckout = async () => {

}

addItemToCart = async () => {

}
 
removeLineItem = async (lineItemIdsToRemove) => {

}

fecthAllProducts = async () => {

}

fetchProductWithHandle = async (handle) => {

}

closeCart = () => {}

openCart = () => {}


closeMenu = () => {}

openMenu = () => {}

    render() {
        return (
            <ShopContext.Provider>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}
  
const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };

export default ShopProvider
