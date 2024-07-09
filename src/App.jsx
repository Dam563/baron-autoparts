
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './layout/Cart';
import Home from './layout/Home';

const App = () => {
const [cart, setCart] = useState([]);

    return (
        <div>
            <Switch>
                <Route path="/" component={<Home/>} />
                <Route path="/cart" component={<Cart/>} />
            </Switch>
        </div>
    );
};

export default App;
