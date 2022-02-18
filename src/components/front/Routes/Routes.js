import React from 'react';
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import { Route, Switch } from "react-router-dom";

const Routes = ({productItems}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>    
            </Switch>
        </div>
    );
};

export default Routes;