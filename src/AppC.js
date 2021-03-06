// import React, {useState} from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import data from "./components/back/Data/Data";
// import Header from "./components/front/Header/Header";
// import Routes from "./components/front/Routes/Routes";
// import { BrowserRouter as Router } from "react-router-dom";



class App extends React.Component {
    render () {
        return (
            <div className="App">
                
            </div>
        );
    }
}

export default App;

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a>
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>                
//         </div>
//     );
// }

// export default App;



const App = () => {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
        setCartItems(
            cartItems.map((item) => 
            item.id === product.id 
                ? {...ProductExist, quantity: ProductExist.quantity + 1 }
                : item
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    
    const handleRemoveProduct = (product) =>{
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
        setCartItems(
            cartItems.map((item) => 
            item.id === product.id 
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
            )
        );
        }
    };

    const handleCartClearance = () => {
        setCartItems([]);
    }


    return (  
        <div>
        <Router>
            <Header />
            <Routes 
            productItems={productItems} 
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
            />
        </Router>
        </div>
    );
};

export default App;
